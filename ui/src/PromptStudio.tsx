import { useState, useMemo } from "react";
import {
  DOMAIN_CATEGORIES,
  PROMPT_PRESETS,
  CHARACTER_PRESETS,
  type PromptPresetItem,
  type EffigyDomain,
  type EffigyCategory,
  type DomainCategoryMeta,
  type CharacterPreset
} from "./promptPresets";

// Re-export for complete backward and forward compatibility
export type { CharacterPreset, PromptPresetItem, EffigyDomain, EffigyCategory, DomainCategoryMeta };
export { CHARACTER_PRESETS, PROMPT_PRESETS, DOMAIN_CATEGORIES };

export function PromptStudio(props: {
  onApplyPrompt?: (prompt: string, name: string, category: "prop" | "character" | "creature") => void;
}) {
  // Domain selection state (default to "laneshark")
  const [activeDomain, setActiveDomain] = useState<EffigyDomain>("laneshark");

  // Subcategory filter state ("All" or specific subcategory)
  const [selectedSubCategory, setSelectedSubCategory] = useState<string>("All");

  // Search input state
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Selected preset ID
  const [selectedPresetId, setSelectedPresetId] = useState<string>("ls-pin");

  // Copy feedback states
  const [copied3D, setCopied3D] = useState(false);
  const [copiedCinematic, setCopiedCinematic] = useState(false);
  const [copiedVideo, setCopiedVideo] = useState(false);

  // Active domain metadata
  const currentDomainMeta = useMemo(() => {
    return DOMAIN_CATEGORIES.find((d) => d.id === activeDomain) || DOMAIN_CATEGORIES[0];
  }, [activeDomain]);

  // Counts per domain
  const domainCounts = useMemo(() => {
    const counts: Record<EffigyDomain, number> = {
      laneshark: 0,
      f1: 0,
      diablo: 0,
      flirt: 0,
      chemmate: 0,
      hero: 0
    };
    for (const p of PROMPT_PRESETS) {
      if (counts[p.domain] !== undefined) {
        counts[p.domain]++;
      }
    }
    return counts;
  }, []);

  // Filtered presets based on active domain, subcategory, and search query
  const filteredPresets = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return PROMPT_PRESETS.filter((item) => {
      // Must match domain
      if (item.domain !== activeDomain) return false;

      // Subcategory filter
      if (selectedSubCategory !== "All" && item.subCategory !== selectedSubCategory) {
        return false;
      }

      // Search query across name, tagline, tags, subcategory, and prompts
      if (q) {
        const inName = item.name.toLowerCase().includes(q);
        const inTagline = item.tagline.toLowerCase().includes(q);
        const inSub = item.subCategory.toLowerCase().includes(q);
        const inTags = item.tags.some((t) => t.toLowerCase().includes(q));
        const in3D = item.prompt3D.toLowerCase().includes(q);
        const inCinematic = item.promptCinematic.toLowerCase().includes(q);
        const inVideo = item.promptVideo.toLowerCase().includes(q);
        return inName || inTagline || inSub || inTags || in3D || inCinematic || inVideo;
      }

      return true;
    });
  }, [activeDomain, selectedSubCategory, searchQuery]);

  // Active preset (defaults to selected ID or first in filtered list)
  const currentPreset: PromptPresetItem = useMemo(() => {
    const found = filteredPresets.find((p) => p.id === selectedPresetId);
    if (found) return found;
    if (filteredPresets.length > 0) return filteredPresets[0];
    // Fallback to first preset in domain or catalog
    const domainFallback = PROMPT_PRESETS.find((p) => p.domain === activeDomain);
    return domainFallback || PROMPT_PRESETS[0];
  }, [filteredPresets, selectedPresetId, activeDomain]);

  // Switch domain handler
  const handleDomainChange = (domain: EffigyDomain) => {
    setActiveDomain(domain);
    setSelectedSubCategory("All");
    setSearchQuery("");
    // Pick first preset in new domain
    const firstInDomain = PROMPT_PRESETS.find((p) => p.domain === domain);
    if (firstInDomain) {
      setSelectedPresetId(firstInDomain.id);
    }
  };

  // Next asset handler
  const handleNextAsset = () => {
    if (filteredPresets.length === 0) return;
    const currentIndex = filteredPresets.findIndex((p) => p.id === currentPreset.id);
    const nextIndex = (currentIndex + 1) % filteredPresets.length;
    setSelectedPresetId(filteredPresets[nextIndex].id);
  };

  // Random asset handler
  const handleRandomAsset = () => {
    if (filteredPresets.length === 0) return;
    const randomIndex = Math.floor(Math.random() * filteredPresets.length);
    setSelectedPresetId(filteredPresets[randomIndex].id);
  };

  // Robust clipboard copy with textarea fallback
  const handleCopy = async (text: string, setCopied: (v: boolean) => void) => {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      try {
        const textarea = document.createElement("textarea");
        textarea.value = text;
        textarea.style.position = "fixed";
        textarea.style.opacity = "0";
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // clipboard write unavailable
      }
    }
  };

  // Apply to Effigy form handler with dynamic category
  const handleApplyToEffigy = () => {
    if (props.onApplyPrompt && currentPreset) {
      props.onApplyPrompt(currentPreset.prompt3D, currentPreset.name, currentPreset.category);
    }
  };

  const getCategoryBadge = (cat: EffigyCategory) => {
    switch (cat) {
      case "prop":
        return { label: "Object / Prop", icon: "📦", color: "var(--accent)" };
      case "character":
        return { label: "Character", icon: "👤", color: "var(--ok)" };
      case "creature":
        return { label: "Creature", icon: "👹", color: "var(--err)" };
    }
  };

  const catBadge = getCategoryBadge(currentPreset.category);

  return (
    <div
      className="prompt-studio card"
      style={{
        background: "var(--panel)",
        border: "1px solid var(--border)",
        borderRadius: "12px",
        padding: "20px",
        marginBottom: "24px",
        minWidth: 0,
        maxWidth: "100%",
        boxSizing: "border-box",
        overflowX: "hidden"
      }}
    >
      {/* 1. Header with title & quick action buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "16px",
          flexWrap: "wrap",
          gap: "12px"
        }}
      >
        <div>
          <h2
            style={{
              fontSize: "18px",
              color: "var(--accent)",
              display: "flex",
              alignItems: "center",
              gap: "8px",
              margin: 0
            }}
          >
            <span>{currentDomainMeta.icon}</span> Effigy Multi-Domain Prompt Studio
          </h2>
          <p style={{ color: "var(--text-2)", fontSize: "13px", margin: "4px 0 0 0" }}>
            Production-grade 3D Game-Ready Assets, Fooocus/SDXL Cinematic Hero Shots, and AI Video Motion Prompts across 6 domains ({PROMPT_PRESETS.length} total presets).
          </p>
        </div>

        {/* Random / Next Controls */}
        <div style={{ display: "flex", gap: "8px" }}>
          <button
            type="button"
            onClick={handleRandomAsset}
            style={{
              background: "var(--raised)",
              border: "1px solid var(--accent)",
              color: "var(--accent)",
              fontWeight: 600,
              fontSize: "12px",
              cursor: "pointer",
              borderRadius: "6px",
              padding: "6px 12px"
            }}
          >
            🎲 Random Asset
          </button>
          <button
            type="button"
            onClick={handleNextAsset}
            style={{
              background: "var(--raised)",
              border: "1px solid var(--border)",
              color: "var(--text)",
              fontSize: "12px",
              cursor: "pointer",
              borderRadius: "6px",
              padding: "6px 12px"
            }}
          >
            ⏭️ Next Asset
          </button>
        </div>
      </div>

      {/* 2. Six Domain Navigation Tabs */}
      <div
        style={{
          display: "flex",
          gap: "8px",
          overflowX: "auto",
          minWidth: 0,
          maxWidth: "100%",
          boxSizing: "border-box",
          paddingBottom: "8px",
          marginBottom: "14px",
          borderBottom: "1px solid var(--border)"
        }}
      >
        {DOMAIN_CATEGORIES.map((domain) => {
          const isActive = activeDomain === domain.id;
          const count = domainCounts[domain.id] || 0;
          return (
            <button
              key={domain.id}
              type="button"
              onClick={() => handleDomainChange(domain.id)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "8px",
                padding: "8px 14px",
                borderRadius: "8px",
                border: isActive ? "1px solid var(--accent)" : "1px solid var(--border)",
                background: isActive ? "var(--accent)" : "var(--raised)",
                color: isActive ? "var(--on-accent)" : "var(--text)",
                fontWeight: isActive ? 700 : 500,
                fontSize: "13px",
                cursor: "pointer",
                whiteSpace: "nowrap",
                transition: "all 0.15s ease"
              }}
            >
              <span>{domain.icon}</span>
              <span>{domain.label}</span>
              <span
                style={{
                  fontSize: "11px",
                  padding: "1px 6px",
                  borderRadius: "10px",
                  background: isActive ? "rgba(0,0,0,0.25)" : "var(--page)",
                  color: isActive ? "var(--on-accent)" : "var(--text-2)"
                }}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Domain Description Callout */}
      <div
        style={{
          background: "var(--page)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "10px 14px",
          marginBottom: "16px",
          display: "flex",
          alignItems: "center",
          gap: "10px"
        }}
      >
        <span style={{ fontSize: "18px" }}>{currentDomainMeta.icon}</span>
        <span style={{ fontSize: "12px", color: "var(--text-2)" }}>
          <strong>{currentDomainMeta.label}</strong>: {currentDomainMeta.description}
        </span>
      </div>

      {/* 3. Subcategories & Search Filtering Bar */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(260px, 100%), 1fr))",
          gap: "14px",
          marginBottom: "16px",
          minWidth: 0,
          maxWidth: "100%"
        }}
      >
        {/* Subcategory Chips Filter */}
        <div>
          <label
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--text-2)",
              display: "block",
              marginBottom: "6px",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}
          >
            Subcategory Filter
          </label>
          <div style={{ display: "flex", gap: "6px", flexWrap: "wrap", minWidth: 0, maxWidth: "100%" }}>
            {["All", ...currentDomainMeta.subCategories].map((subCat) => {
              const isSelected = selectedSubCategory === subCat;
              return (
                <button
                  key={subCat}
                  type="button"
                  onClick={() => setSelectedSubCategory(subCat)}
                  style={{
                    fontSize: "12px",
                    padding: "4px 10px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    border: isSelected ? "1px solid var(--accent)" : "1px solid var(--border)",
                    background: isSelected ? "var(--raised)" : "var(--page)",
                    color: isSelected ? "var(--accent)" : "var(--text-2)",
                    fontWeight: isSelected ? 600 : 400
                  }}
                >
                  {subCat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Live Search Input */}
        <div>
          <label
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--text-2)",
              display: "block",
              marginBottom: "6px",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}
          >
            Live Search Filter ({filteredPresets.length} items)
          </label>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={`Search ${currentDomainMeta.label} (e.g., ${currentDomainMeta.subCategories[0] || "props"})...`}
              style={{
                width: "100%",
                padding: "8px 30px 8px 12px",
                background: "var(--raised)",
                border: "1px solid var(--border)",
                borderRadius: "8px",
                color: "var(--text)",
                fontSize: "13px",
                outline: "none",
                boxSizing: "border-box"
              }}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                style={{
                  position: "absolute",
                  right: "8px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  background: "transparent",
                  border: "none",
                  color: "var(--text-2)",
                  cursor: "pointer",
                  fontSize: "12px"
                }}
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* 4. Asset Selector Dropdown & Quick-Pick Grid */}
      <div style={{ marginBottom: "16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "6px" }}>
          <label
            style={{
              fontSize: "11px",
              fontWeight: 700,
              color: "var(--text-2)",
              textTransform: "uppercase",
              letterSpacing: "0.5px"
            }}
          >
            Select Asset ({filteredPresets.length} available)
          </label>
          {filteredPresets.length === 0 && (
            <span style={{ fontSize: "12px", color: "var(--warn)" }}>
              No items match your filter. Try clearing the search.
            </span>
          )}
        </div>

        {filteredPresets.length > 0 && (
          <select
            value={currentPreset.id}
            onChange={(e) => setSelectedPresetId(e.target.value)}
            style={{
              width: "100%",
              padding: "10px 12px",
              background: "var(--raised)",
              border: "1px solid var(--border)",
              borderRadius: "8px",
              color: "var(--text)",
              fontSize: "13px",
              cursor: "pointer",
              marginBottom: "10px"
            }}
          >
            {filteredPresets.map((preset) => (
              <option key={preset.id} value={preset.id}>
                [{preset.subCategory}] {preset.name} — {preset.tagline}
              </option>
            ))}
          </select>
        )}

        {/* Quick Pick Scrollable Cards Strip */}
        {filteredPresets.length > 0 && (
          <div
            style={{
              display: "flex",
              gap: "8px",
              overflowX: "auto",
              minWidth: 0,
              maxWidth: "100%",
              boxSizing: "border-box",
              paddingBottom: "6px"
            }}
          >
            {filteredPresets.slice(0, 16).map((preset) => {
              const isSelected = preset.id === currentPreset.id;
              return (
                <button
                  key={preset.id}
                  type="button"
                  onClick={() => setSelectedPresetId(preset.id)}
                  style={{
                    flexShrink: 0,
                    padding: "6px 10px",
                    borderRadius: "6px",
                    border: isSelected ? "1px solid var(--accent)" : "1px solid var(--border)",
                    background: isSelected ? "var(--raised)" : "var(--page)",
                    color: isSelected ? "var(--accent)" : "var(--text)",
                    fontSize: "11px",
                    cursor: "pointer",
                    textAlign: "left",
                    maxWidth: "200px"
                  }}
                >
                  <div style={{ fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {preset.name}
                  </div>
                  <div style={{ fontSize: "10px", color: "var(--text-2)" }}>
                    {preset.subCategory}
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* 5. Selected Asset Summary Card */}
      <div
        style={{
          background: "var(--raised)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "14px",
          marginBottom: "16px"
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "8px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <h3 style={{ fontSize: "16px", color: "var(--text)", margin: 0 }}>
                {currentPreset.name}
              </h3>
              <span
                style={{
                  fontSize: "11px",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  background: "var(--page)",
                  color: "var(--text-2)",
                  border: "1px solid var(--border)"
                }}
              >
                {currentPreset.subCategory}
              </span>
              <span
                style={{
                  fontSize: "11px",
                  padding: "2px 8px",
                  borderRadius: "4px",
                  background: "var(--page)",
                  color: catBadge.color,
                  border: "1px solid var(--border)",
                  display: "flex",
                  alignItems: "center",
                  gap: "4px"
                }}
              >
                <span>{catBadge.icon}</span> {catBadge.label}
              </span>
            </div>
            <p style={{ fontSize: "13px", color: "var(--text-2)", margin: "6px 0 8px 0" }}>
              {currentPreset.tagline}
            </p>
          </div>

          {/* Tags */}
          <div style={{ display: "flex", gap: "4px", flexWrap: "wrap" }}>
            {currentPreset.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: "10px",
                  padding: "2px 6px",
                  borderRadius: "4px",
                  background: "var(--page)",
                  color: "var(--text-2)"
                }}
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* 6. Prompt Output 1: Effigy 3D Game-Ready Asset Prompt */}
      <div
        style={{
          background: "var(--page)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "14px",
          marginBottom: "14px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
            flexWrap: "wrap",
            gap: "8px"
          }}
        >
          <div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--ok)",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
            >
              🎮 1. Effigy 3D Game-Ready Asset Prompt
            </span>
            <span style={{ fontSize: "11px", color: "var(--text-2)", marginLeft: "8px" }}>
              (Clean neutral background, level camera, centered silhouette for 3D modeling & auto-rigging)
            </span>
          </div>
          <div style={{ display: "flex", gap: "8px" }}>
            <button
              type="button"
              onClick={() => handleCopy(currentPreset.prompt3D, setCopied3D)}
              className="button"
              style={{
                fontSize: "12px",
                padding: "5px 12px",
                background: copied3D ? "var(--ok)" : "var(--raised)",
                color: copied3D ? "var(--on-accent)" : "var(--text)",
                border: "1px solid var(--border)",
                cursor: "pointer",
                borderRadius: "6px"
              }}
            >
              {copied3D ? "✓ Copied 3D Prompt! ✨" : "📋 Copy 3D Prompt"}
            </button>
            {props.onApplyPrompt && (
              <button
                type="button"
                onClick={handleApplyToEffigy}
                className="button primary"
                style={{
                  fontSize: "12px",
                  padding: "5px 12px",
                  background: "var(--accent)",
                  color: "var(--on-accent)",
                  fontWeight: 600,
                  cursor: "pointer",
                  border: "none",
                  borderRadius: "6px"
                }}
              >
                ✏️ Use in New Asset Form
              </button>
            )}
          </div>
        </div>

        {/* Scrollable container with anti-truncation */}
        <div
          style={{
            maxHeight: "180px",
            overflowY: "auto",
            wordBreak: "break-word",
            padding: "10px",
            background: "var(--raised)",
            borderRadius: "6px",
            border: "1px solid var(--border)"
          }}
        >
          <p
            style={{
              fontSize: "13px",
              lineHeight: "1.5",
              color: "var(--text)",
              fontFamily: "monospace",
              margin: 0
            }}
          >
            {currentPreset.prompt3D}
          </p>
        </div>
      </div>

      {/* 7. Prompt Output 2: Fooocus / SDXL Cinematic Hero Shot Prompt */}
      <div
        style={{
          background: "var(--page)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "14px",
          marginBottom: "14px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
            flexWrap: "wrap",
            gap: "8px"
          }}
        >
          <div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--accent)",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
            >
              🎬 2. Fooocus / SDXL Cinematic Hero Shot Prompt
            </span>
            <span style={{ fontSize: "11px", color: "var(--text-2)", marginLeft: "8px" }}>
              (Cinematic lighting, 35mm film grain, anamorphic lens, grand environmental keyframe)
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleCopy(currentPreset.promptCinematic, setCopiedCinematic)}
            className="button"
            style={{
              fontSize: "12px",
              padding: "5px 12px",
              background: copiedCinematic ? "var(--ok)" : "var(--raised)",
              color: copiedCinematic ? "var(--on-accent)" : "var(--text)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              borderRadius: "6px"
            }}
          >
            {copiedCinematic ? "✓ Copied Cinematic Prompt! ✨" : "📋 Copy Cinematic Prompt"}
          </button>
        </div>

        {/* Scrollable container with anti-truncation */}
        <div
          style={{
            maxHeight: "180px",
            overflowY: "auto",
            wordBreak: "break-word",
            padding: "10px",
            background: "var(--raised)",
            borderRadius: "6px",
            border: "1px solid var(--border)"
          }}
        >
          <p
            style={{
              fontSize: "13px",
              lineHeight: "1.5",
              color: "var(--text)",
              fontFamily: "monospace",
              margin: 0
            }}
          >
            {currentPreset.promptCinematic}
          </p>
        </div>
      </div>

      {/* 8. Prompt Output 3: AI Video Camera & Motion Direction Prompt */}
      <div
        style={{
          background: "var(--page)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "14px"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "8px",
            flexWrap: "wrap",
            gap: "8px"
          }}
        >
          <div>
            <span
              style={{
                fontSize: "12px",
                fontWeight: 700,
                color: "var(--focus)",
                textTransform: "uppercase",
                letterSpacing: "0.5px"
              }}
            >
              🎥 3. AI Video Camera & Motion Direction (Runway / Kling / Luma / Sora)
            </span>
            <span style={{ fontSize: "11px", color: "var(--text-2)", marginLeft: "8px" }}>
              (Camera motion vectors, atmospheric wind/particles, and subject dynamics)
            </span>
          </div>
          <button
            type="button"
            onClick={() => handleCopy(currentPreset.promptVideo, setCopiedVideo)}
            className="button"
            style={{
              fontSize: "12px",
              padding: "5px 12px",
              background: copiedVideo ? "var(--ok)" : "var(--raised)",
              color: copiedVideo ? "var(--on-accent)" : "var(--text)",
              border: "1px solid var(--border)",
              cursor: "pointer",
              borderRadius: "6px"
            }}
          >
            {copiedVideo ? "✓ Copied Motion Prompt! ✨" : "📋 Copy Video Motion Prompt"}
          </button>
        </div>

        {/* Scrollable container with anti-truncation */}
        <div
          style={{
            maxHeight: "180px",
            overflowY: "auto",
            wordBreak: "break-word",
            padding: "10px",
            background: "var(--raised)",
            borderRadius: "6px",
            border: "1px solid var(--border)"
          }}
        >
          <p
            style={{
              fontSize: "13px",
              lineHeight: "1.5",
              color: "var(--text)",
              fontFamily: "monospace",
              margin: 0
            }}
          >
            {currentPreset.promptVideo}
          </p>
        </div>
      </div>
    </div>
  );
}

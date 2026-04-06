"use client";

import { useState } from "react";
import { clientGalleryImages } from "../../data/site-data";
import { ClientLogin } from "./client-login";
import { ClientGalleryGrid } from "./client-gallery-grid";
import { DownloadButton } from "./download-button";
import { CommentBox } from "./comment-box";

const accessToken = "CHANDU2026";

export function ClientGalleryPage() {
  const [token, setToken] = useState("");
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [selectedTitles, setSelectedTitles] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  const toggleSelected = (title: string) => {
    setSelectedTitles((current) =>
      current.includes(title) ? current.filter((value) => value !== title) : [...current, title],
    );
  };

  return (
    <div className="grid gap-6">
      {!isUnlocked ? (
        <ClientLogin
          token={token}
          onTokenChange={setToken}
          onSubmit={() => setIsUnlocked(token.trim().toUpperCase() === accessToken)}
        />
      ) : (
        <>
          <ClientGalleryGrid selectedTitles={selectedTitles} onToggle={toggleSelected} />
          <div className="grid gap-4 rounded-[1.75rem] border border-white/70 bg-white/75 p-6 shadow-[0_16px_40px_rgba(72,53,38,0.08)] lg:grid-cols-[1fr_auto]">
            <CommentBox value={comment} onChange={setComment} />
            <div className="flex flex-col justify-between gap-3">
              <DownloadButton disabled={selectedTitles.length === 0} />
              <p className="text-sm text-[#6d5c51]">
                {selectedTitles.length} of {clientGalleryImages.length} selected
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

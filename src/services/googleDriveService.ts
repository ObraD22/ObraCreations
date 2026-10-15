export interface DriveVideoFile {
  id: string;
  name: string;
  mimeType: string;
  previewUrl: string;
  viewUrl: string;
  size?: string;
  title: string;
  couple: string;
  category: string;
  storytellingCaption: string;
  cinematographyCaption: string;
  highlights: string[];
  specs: {
    resolution: string;
    framerate: string;
    audio: string;
    source: string;
  };
}

export const DRIVE_FOLDER_ID = '12sNCiVYflQx8LHVN2gDBPBq6cqpLN8rx';
export const DRIVE_FOLDER_URL = `https://drive.google.com/drive/folders/${DRIVE_FOLDER_ID}?usp=sharing`;
export const DRIVE_FOLDER_EMBED_URL = `https://drive.google.com/embeddedfolderview?id=${DRIVE_FOLDER_ID}#grid`;

export const PRESET_DRIVE_VIDEOS: DriveVideoFile[] = [
  {
    id: '1ZUV5QkWQpShbJZBC1OdwdDh9hShXF0-N',
    name: 'Dan and Dhea.mp4',
    mimeType: 'video/mp4',
    previewUrl: 'https://drive.google.com/file/d/1ZUV5QkWQpShbJZBC1OdwdDh9hShXF0-N/preview',
    viewUrl: 'https://drive.google.com/file/d/1ZUV5QkWQpShbJZBC1OdwdDh9hShXF0-N/view?usp=sharing',
    title: 'Dan & Dhea | Save the Date Film',
    couple: 'Dan & Dhea',
    category: 'Save the Date Film',
    storytellingCaption:
      'There is so much warmth and pure joy between Dan and Dhea, and we wanted this film to feel exactly like their love—effortless, genuine, and beautifully real. Here is a little sneak peek into their beautiful connection as we count down to the big day!',
    cinematographyCaption:
      'Some moments pass by in a heartbeat. To ensure you never miss a detail, this film was captured on high-resolution cinema cameras with high-speed capabilities. By filming in breathtaking super slow-motion, we are able to physically slow down time—preserving every fleeting smile, gentle touch, and candid emotion with crystal-clear clarity so you can live in that exact second forever.',
    highlights: [
      'Natural concept by the couple',
      'Intimate moment with proper framing',
      'Timeless film-emulation color grading',
    ],
    specs: {
      resolution: 'High Definition',
      framerate: '24fps Narrative Motion',
      audio: 'High-Fidelity Sound Master',
      source: 'Google Drive',
    },
  },
  {
    id: '1ldYUncIE_vqq0l372apSRsAajysFAqfK',
    name: 'Macky and Ghie.mp4',
    mimeType: 'video/mp4',
    previewUrl: 'https://drive.google.com/file/d/1ldYUncIE_vqq0l372apSRsAajysFAqfK/preview',
    viewUrl: 'https://drive.google.com/file/d/1ldYUncIE_vqq0l372apSRsAajysFAqfK/view?usp=sharing',
    title: 'Macky & Ghie | Save the Date Film',
    couple: 'Macky & Ghie',
    category: 'Save the Date Film',
    storytellingCaption:
      'Real love deserves a wider frame. 🎬 We captured Macky and Ghie’s Save the Date film through the unique, vintage character of an anamorphic lens, but it’s their genuine sweetness that truly steals the show. The way they look at each other, the soft laughter, and the gentle moments in between—it’s a love story that feels like an instant classic. We can’t wait for their forever to begin! 💍✨ Save the Date!',
    cinematographyCaption:
      'Crafting a love story in ultra-high definition. 🎥✨ For Macky and Ghie’s Save the Date, we paired the unmatched clarity of a 4K camera with the distinct, cinematic character of an anamorphic lens.',
    highlights: [
      'Cinematic Phasing',
      'Anamorphic Character',
      'Exceptional Aerials',
    ],
    specs: {
      resolution: '4K Ultra HD',
      framerate: '24fps Narrative Motion',
      audio: 'Heartfelt OPM',
      source: 'Google Drive',
    },
  },
];

export async function fetchDriveFolderFiles(accessToken?: string | null): Promise<DriveVideoFile[]> {
  if (!accessToken) {
    return PRESET_DRIVE_VIDEOS;
  }

  try {
    const query = encodeURIComponent(`'${DRIVE_FOLDER_ID}' in parents and trashed = false`);
    const fields = encodeURIComponent('files(id, name, mimeType, size, thumbnailLink, webViewLink)');
    const res = await fetch(`https://www.googleapis.com/drive/v3/files?q=${query}&fields=${fields}`, {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    if (!res.ok) {
      console.warn('Google Drive API call returned status:', res.status);
      return PRESET_DRIVE_VIDEOS;
    }

    const data = await res.json();
    if (!data.files || data.files.length === 0) {
      return PRESET_DRIVE_VIDEOS;
    }

    // Merge API metadata with our curated storytelling notes
    return PRESET_DRIVE_VIDEOS.map((preset) => {
      const liveFile = data.files.find((f: { id: string }) => f.id === preset.id);
      if (liveFile) {
        return {
          ...preset,
          name: liveFile.name || preset.name,
          viewUrl: liveFile.webViewLink || preset.viewUrl,
        };
      }
      return preset;
    });
  } catch (err) {
    console.error('Error fetching Google Drive folder files:', err);
    return PRESET_DRIVE_VIDEOS;
  }
}

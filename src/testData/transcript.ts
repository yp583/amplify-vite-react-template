const testTranscript = [
  {
    word: "Go.",
    start: 0.0,
    end: 1.68,
  },
  {
    word: "Hi,",
    start: 9.76,
    end: 10.2,
  },
  {
    word: "I'm",
    start: 10.2,
    end: 10.4,
  },
  {
    word: "Caitlin.",
    start: 10.4,
    end: 10.78,
  },
  {
    word: "I'm",
    start: 10.78,
    end: 10.96,
  },
  {
    word: "going",
    start: 10.96,
    end: 11.08,
  },
  {
    word: "to",
    start: 11.08,
    end: 11.14,
  },
  {
    word: "be",
    start: 11.14,
    end: 11.24,
  },
  {
    word: "your",
    start: 11.24,
    end: 11.34,
  },
  {
    word: "nurse",
    start: 11.34,
    end: 11.56,
  },
  {
    word: "today.",
    start: 11.56,
    end: 12.34,
  },
  {
    word: "I'm",
    start: 11.82,
    end: 12.5,
  },
  {
    word: "going",
    start: 12.5,
    end: 12.56,
  },
  {
    word: "to",
    start: 12.56,
    end: 12.74,
  },
  {
    word: "wash",
    start: 12.74,
    end: 12.82,
  },
  {
    word: "my",
    start: 12.82,
    end: 13,
  },
  {
    word: "hands,",
    start: 13,
    end: 13.9,
  },
  {
    word: "hold",
    start: 13.9,
    end: 14.1,
  },
  {
    word: "the",
    start: 14.1,
    end: 14.3,
  },
  {
    word: "curtain",
    start: 14.3,
    end: 14.36,
  },
  {
    word: "for",
    start: 14.36,
    end: 14.58,
  },
  {
    word: "privacy.",
    start: 14.58,
    end: 15.22,
  },
  {
    word: "Do",
    start: 14.84,
    end: 15.8,
  },
  {
    word: "you",
    start: 15.8,
    end: 15.88,
  },
  {
    word: "have",
    start: 15.88,
    end: 15.98,
  },
  {
    word: "any",
    start: 15.98,
    end: 16.14,
  },
  {
    word: "pain",
    start: 16.14,
    end: 16.62,
  },
  {
    word: "or",
    start: 16.62,
    end: 16.92,
  },
  {
    word: "allergies?",
    start: 16.92,
    end: 17.48,
  },
  {
    word: "No.",
    start: 17.74,
    end: 18.28,
  },
  {
    word: "No?",
    start: 17.72,
    end: 18.66,
  },
  {
    word: "Okay.",
    start: 18.66,
    end: 19.28,
  },
  {
    word: "Can",
    start: 18.5,
    end: 19.62,
  },
  {
    word: "I",
    start: 19.62,
    end: 19.7,
  },
  {
    word: "check",
    start: 19.7,
    end: 19.86,
  },
  {
    word: "your",
    start: 19.86,
    end: 20.02,
  },
  {
    word: "wristband?",
    start: 20.02,
    end: 21.2,
  },
  {
    word: "And",
    start: 20.5,
    end: 21.32,
  },
  {
    word: "can",
    start: 21.32,
    end: 21.46,
  },
  {
    word: "you",
    start: 21.46,
    end: 21.58,
  },
  {
    word: "tell",
    start: 21.58,
    end: 21.7,
  },
  {
    word: "me",
    start: 21.7,
    end: 21.84,
  },
  {
    word: "your",
    start: 21.84,
    end: 22,
  },
  {
    word: "name",
    start: 22,
    end: 22.28,
  },
  {
    word: "and",
    start: 22.28,
    end: 22.4,
  },
  {
    word: "your",
    start: 22.4,
    end: 22.52,
  },
  {
    word: "date",
    start: 22.52,
    end: 22.7,
  },
  {
    word: "of",
    start: 22.7,
    end: 22.72,
  },
  {
    word: "birth?",
    start: 22.72,
    end: 23.14,
  },
  {
    word: "Taylor",
    start: 23.18,
    end: 23.6,
  },
  {
    word: "Parker,",
    start: 23.6,
    end: 24.1,
  },
  {
    word: "July",
    start: 24.1,
    end: 24.42,
  },
  {
    word: "8th,",
    start: 24.42,
    end: 24.68,
  },
  {
    word: "1996.",
    start: 24.68,
    end: 25.36,
  },
  {
    word: "And",
    start: 24.5,
    end: 25.56,
  },
  {
    word: "can",
    start: 25.56,
    end: 25.7,
  },
  {
    word: "you",
    start: 25.7,
    end: 25.78,
  },
  {
    word: "tell",
    start: 25.78,
    end: 25.9,
  },
  {
    word: "me",
    start: 25.9,
    end: 26.02,
  },
  {
    word: "where",
    start: 26.02,
    end: 26.14,
  },
  {
    word: "we",
    start: 26.14,
    end: 26.32,
  },
  {
    word: "are?",
    start: 26.32,
    end: 26.48,
  },
  {
    word: "Detroit,",
    start: 26.7,
    end: 27.2,
  },
  {
    word: "Mercy.",
    start: 27.2,
    end: 27.48,
  },
  {
    word: "And",
    start: 26.72,
    end: 27.78,
  },
  {
    word: "can",
    start: 27.78,
    end: 27.92,
  },
  {
    word: "you",
    start: 27.92,
    end: 28.04,
  },
  {
    word: "tell",
    start: 28.04,
    end: 28.12,
  },
  {
    word: "me",
    start: 28.12,
    end: 28.24,
  },
  {
    word: "the",
    start: 28.24,
    end: 28.38,
  },
  {
    word: "year?",
    start: 28.38,
    end: 28.48,
  },
  {
    word: "2016.",
    start: 28.6,
    end: 29.48,
  },
  {
    word: "Good.",
    start: 29,
    end: 30.46,
  },
  {
    word: "The",
    start: 30.46,
    end: 30.6,
  },
  {
    word: "patient",
    start: 30.6,
    end: 30.86,
  },
  {
    word: "is",
    start: 30.86,
    end: 31.1,
  },
  {
    word: "A&O",
    start: 31.1,
    end: 31.5,
  },
  {
    word: "times",
    start: 31.5,
    end: 31.82,
  },
  {
    word: "three.",
    start: 31.82,
    end: 32.78,
  },
  {
    word: "She",
    start: 32.78,
    end: 33.16,
  },
  {
    word: "appears",
    start: 33.16,
    end: 33.48,
  },
  {
    word: "to",
    start: 33.48,
    end: 33.6,
  },
  {
    word: "be",
    start: 33.6,
    end: 33.62,
  },
  {
    word: "of",
    start: 33.62,
    end: 33.7,
  },
  {
    word: "the",
    start: 33.7,
    end: 33.74,
  },
  {
    word: "same",
    start: 33.74,
    end: 33.76,
  },
  {
    word: "age",
    start: 33.76,
    end: 34.04,
  },
  {
    word: "with",
    start: 34.04,
    end: 34.14,
  },
  {
    word: "appearance.",
    start: 34.14,
    end: 35.18,
  },
  {
    word: "She",
    start: 35.18,
    end: 35.36,
  },
  {
    word: "has",
    start: 35.36,
    end: 35.5,
  },
  {
    word: "overall",
    start: 35.5,
    end: 35.86,
  },
  {
    word: "good",
    start: 35.86,
    end: 36.1,
  },
  {
    word: "hygiene.",
    start: 36.1,
    end: 36.98,
  },
  {
    word: "Her",
    start: 36.98,
    end: 37.06,
  },
  {
    word: "speech",
    start: 37.06,
    end: 37.48,
  },
  {
    word: "and",
    start: 37.48,
    end: 37.74,
  },
  {
    word: "affect",
    start: 37.74,
    end: 38.2,
  },
  {
    word: "are",
    start: 38.2,
    end: 38.42,
  },
  {
    word: "appropriate.",
    start: 38.42,
    end: 39.9,
  },
  {
    word: "She",
    start: 39.9,
    end: 39.98,
  },
  {
    word: "appears",
    start: 39.98,
    end: 40.36,
  },
  {
    word: "to",
    start: 40.36,
    end: 40.54,
  },
  {
    word: "be",
    start: 40.54,
    end: 40.66,
  },
  {
    word: "comfortable",
    start: 40.66,
    end: 41.06,
  },
  {
    word: "and",
    start: 41.06,
    end: 41.58,
  },
  {
    word: "calm",
    start: 41.58,
    end: 42.2,
  },
  {
    word: "with",
    start: 42.2,
    end: 42.5,
  },
  {
    word: "no",
    start: 42.5,
    end: 42.7,
  },
  {
    word: "present",
    start: 42.7,
    end: 42.98,
  },
  {
    word: "signs",
    start: 42.98,
    end: 43.24,
  },
  {
    word: "of",
    start: 43.24,
    end: 43.4,
  },
  {
    word: "illness.",
    start: 43.4,
    end: 44.68,
  },
  {
    word: "I'm",
    start: 44.68,
    end: 44.82,
  },
  {
    word: "going",
    start: 44.82,
    end: 44.9,
  },
  {
    word: "to",
    start: 44.9,
    end: 44.96,
  },
  {
    word: "start",
    start: 44.96,
    end: 45.12,
  },
  {
    word: "with",
    start: 45.12,
    end: 45.26,
  },
  {
    word: "your",
    start: 45.26,
    end: 45.42,
  },
  {
    word: "scalp.",
    start: 45.42,
    end: 45.74,
  },
  {
    word: "So,",
    start: 47.42,
    end: 48.46,
  },
  {
    word: "there's",
    start: 48.46,
    end: 50.1,
  },
  {
    word: "no",
    start: 50.1,
    end: 50.3,
  },
  {
    word: "signs",
    start: 50.3,
    end: 50.5,
  },
  {
    word: "of",
    start: 50.5,
    end: 50.68,
  },
  {
    word: "lesions",
    start: 50.68,
    end: 51.12,
  },
  {
    word: "or",
    start: 51.12,
    end: 51.44,
  },
  {
    word: "presence",
    start: 51.44,
    end: 51.8,
  },
  {
    word: "of",
    start: 51.8,
    end: 52.16,
  },
  {
    word: "parasites.",
    start: 52.16,
    end: 53.54,
  },
  {
    word: "Her",
    start: 53.1,
    end: 53.7,
  },
  {
    word: "hair",
    start: 53.7,
    end: 53.9,
  },
  {
    word: "is",
    start: 53.9,
    end: 54.02,
  },
  {
    word: "evenly",
    start: 54.02,
    end: 54.36,
  },
  {
    word: "distributed",
    start: 54.36,
    end: 54.88,
  },
  {
    word: "and",
    start: 54.88,
    end: 55.26,
  },
  {
    word: "thick.",
    start: 55.26,
    end: 58.28,
  },
  {
    word: "The",
    start: 57.5,
    end: 58.1,
  },
  {
    word: "skin",
    start: 58.1,
    end: 58.28,
  },
  {
    word: "on",
    start: 58.28,
    end: 58.44,
  },
  {
    word: "her",
    start: 58.44,
    end: 58.56,
  },
  {
    word: "face",
    start: 58.56,
    end: 59,
  },
  {
    word: "is",
    start: 59,
    end: 59.24,
  },
  {
    word: "dry,",
    start: 59.24,
    end: 59.72,
  },
  {
    word: "warm,",
    start: 59.72,
    end: 60.24,
  },
  {
    word: "and",
    start: 60.24,
    end: 60.42,
  },
  {
    word: "intact.",
    start: 60.42,
    end: 61.34,
  },
  {
    word: "And",
    start: 60.98,
    end: 61.54,
  },
  {
    word: "can",
    start: 61.54,
    end: 61.64,
  },
  {
    word: "you",
    start: 61.64,
    end: 61.82,
  },
  {
    word: "pop",
    start: 61.82,
    end: 61.88,
  },
  {
    word: "your",
    start: 61.88,
    end: 62.02,
  },
  {
    word: "cheeks",
    start: 62.02,
    end: 62.2,
  },
  {
    word: "for",
    start: 62.2,
    end: 62.34,
  },
  {
    word: "me?",
    start: 62.34,
    end: 63.28,
  },
  {
    word: "And",
    start: 62.88,
    end: 63.44,
  },
  {
    word: "smile.",
    start: 63.44,
    end: 64.7,
  },
  {
    word: "Her",
    start: 63.88,
    end: 65.06,
  },
  {
    word: "face",
    start: 65.06,
    end: 65.32,
  },
  {
    word: "is",
    start: 65.32,
    end: 65.42,
  },
  {
    word: "symmetric.",
    start: 65.42,
    end: 65.94,
  },
  {
    word: "Cranial",
    start: 65.82,
    end: 66.36,
  },
  {
    word: "nerves",
    start: 66.36,
    end: 66.56,
  },
  {
    word: "five",
    start: 66.56,
    end: 66.78,
  },
  {
    word: "and",
    start: 66.78,
    end: 66.98,
  },
  {
    word: "seven",
    start: 66.98,
    end: 67.22,
  },
  {
    word: "are",
    start: 67.22,
    end: 67.4,
  },
  {
    word: "present.",
    start: 67.4,
    end: 68.76,
  },
  {
    word: "Her",
    start: 68.26,
    end: 68.84,
  },
  {
    word: "nose",
    start: 68.84,
    end: 69.12,
  },
  {
    word: "is",
    start: 69.12,
    end: 69.3,
  },
  {
    word: "midline.",
    start: 69.3,
    end: 70.5,
  },
  {
    word: "Her",
    start: 70.54,
    end: 70.68,
  },
  {
    word: "eyes",
    start: 70.68,
    end: 70.84,
  },
  {
    word: "appear",
    start: 70.84,
    end: 71.1,
  },
  {
    word: "to",
    start: 71.1,
    end: 71.2,
  },
  {
    word: "be",
    start: 71.2,
    end: 71.36,
  },
  {
    word: "symmetric.",
    start: 71.36,
    end: 76.82,
  },
  {
    word: "And",
    start: 77.74,
    end: 78.32,
  },
  {
    word: "follow",
    start: 78.32,
    end: 78.62,
  },
  {
    word: "my",
    start: 78.62,
    end: 78.94,
  },
  {
    word: "pen",
    start: 78.94,
    end: 78.98,
  },
  {
    word: "light",
    start: 78.98,
    end: 79.12,
  },
  {
    word: "inward.",
    start: 79.12,
    end: 81.56,
  },
  {
    word: "Her",
    start: 82.66,
    end: 83.16,
  },
  {
    word: "eyes",
    start: 83.16,
    end: 83.34,
  },
  {
    word: "are",
    start: 83.34,
    end: 83.56,
  },
  {
    word: "perla.",
    start: 83.56,
    end: 84.3,
  },
  {
    word: "Cudging",
    start: 84.72,
    end: 85.14,
  },
  {
    word: "tuba",
    start: 85.14,
    end: 85.4,
  },
  {
    word: "is",
    start: 85.4,
    end: 85.74,
  },
  {
    word: "pink",
    start: 85.74,
    end: 86.14,
  },
  {
    word: "and",
    start: 86.14,
    end: 86.4,
  },
  {
    word: "moist.",
    start: 86.4,
    end: 87.26,
  },
  {
    word: "Her",
    start: 86.8,
    end: 87.42,
  },
  {
    word: "sclera",
    start: 87.42,
    end: 87.72,
  },
  {
    word: "is",
    start: 87.72,
    end: 88.1,
  },
  {
    word: "white.",
    start: 88.1,
    end: 89.88,
  },
  {
    word: "And",
    start: 88.9,
    end: 89.46,
  },
  {
    word: "then",
    start: 89.46,
    end: 89.6,
  },
  {
    word: "I'm",
    start: 89.6,
    end: 89.72,
  },
  {
    word: "going",
    start: 89.72,
    end: 89.78,
  },
  {
    word: "to",
    start: 89.78,
    end: 89.82,
  },
  {
    word: "look",
    start: 89.82,
    end: 89.94,
  },
  {
    word: "in",
    start: 89.94,
    end: 90.02,
  },
  {
    word: "your",
    start: 90.02,
    end: 90.1,
  },
  {
    word: "mouth",
    start: 90.1,
    end: 90.48,
  },
  {
    word: "and",
    start: 90.48,
    end: 91.34,
  },
  {
    word: "just",
    start: 91.34,
    end: 91.5,
  },
  {
    word: "say",
    start: 91.5,
    end: 91.68,
  },
  {
    word: "ah",
    start: 91.68,
    end: 91.74,
  },
  {
    word: "for",
    start: 91.74,
    end: 91.92,
  },
  {
    word: "me.",
    start: 91.92,
    end: 92.56,
  },
  {
    word: "Her",
    start: 93.38,
    end: 94,
  },
  {
    word: "uvula",
    start: 94,
    end: 94.58,
  },
  {
    word: "is",
    start: 94.58,
    end: 94.9,
  },
  {
    word: "midline",
    start: 94.9,
    end: 95.4,
  },
  {
    word: "and",
    start: 95.4,
    end: 95.58,
  },
  {
    word: "retracts",
    start: 95.58,
    end: 96.02,
  },
  {
    word: "when",
    start: 96.02,
    end: 96.12,
  },
  {
    word: "she",
    start: 96.12,
    end: 96.3,
  },
  {
    word: "says",
    start: 96.3,
    end: 96.64,
  },
  {
    word: "ah.",
    start: 96.64,
    end: 97.6,
  },
  {
    word: "Her",
    start: 97.32,
    end: 97.94,
  },
  {
    word: "tonsils",
    start: 97.94,
    end: 98.3,
  },
  {
    word: "are",
    start: 98.3,
    end: 98.48,
  },
  {
    word: "present",
    start: 98.48,
    end: 98.86,
  },
  {
    word: "grade",
    start: 98.86,
    end: 99.2,
  },
  {
    word: "one.",
    start: 99.2,
    end: 100.1,
  },
  {
    word: "Her",
    start: 100.14,
    end: 100.3,
  },
  {
    word: "mucosa",
    start: 100.3,
    end: 100.86,
  },
  {
    word: "is",
    start: 100.86,
    end: 101.24,
  },
  {
    word: "dry,",
    start: 101.24,
    end: 101.84,
  },
  {
    word: "or",
    start: 101.84,
    end: 102.92,
  },
  {
    word: "I'm",
    start: 102.92,
    end: 103.08,
  },
  {
    word: "sorry,",
    start: 103.08,
    end: 103.3,
  },
  {
    word: "moist",
    start: 103.3,
    end: 103.74,
  },
  {
    word: "and",
    start: 103.74,
    end: 104,
  },
  {
    word: "pink.",
    start: 104,
    end: 104.38,
  },
  {
    word: "Her",
    start: 105.52,
    end: 105.66,
  },
  {
    word: "tongue",
    start: 105.66,
    end: 106.04,
  },
  {
    word: "is",
    start: 106.04,
    end: 106.52,
  },
  {
    word: "midline",
    start: 106.52,
    end: 107.08,
  },
  {
    word: "with",
    start: 107.08,
    end: 107.58,
  },
  {
    word: "no",
    start: 107.58,
    end: 108.02,
  },
  {
    word: "presence",
    start: 108.02,
    end: 108.64,
  },
  {
    word: "of",
    start: 108.64,
    end: 108.9,
  },
  {
    word: "lesions,",
    start: 108.9,
    end: 109.9,
  },
  {
    word: "no",
    start: 109.9,
    end: 110.26,
  },
  {
    word: "abnormalities",
    start: 110.26,
    end: 111.8,
  },
  {
    word: "in",
    start: 111.8,
    end: 112.02,
  },
  {
    word: "coating.",
    start: 112.02,
    end: 112.3,
  },
  {
    word: "Her",
    start: 115.1,
    end: 115.24,
  },
  {
    word: "teeth",
    start: 115.24,
    end: 115.62,
  },
  {
    word: "are",
    start: 115.62,
    end: 115.86,
  },
  {
    word: "present",
    start: 115.86,
    end: 116.3,
  },
  {
    word: "and",
    start: 116.3,
    end: 117.38,
  },
  {
    word: "white",
    start: 117.38,
    end: 117.66,
  },
  {
    word: "with",
    start: 117.66,
    end: 117.86,
  },
  {
    word: "no",
    start: 117.86,
    end: 118.04,
  },
  {
    word: "signs",
    start: 118.04,
    end: 118.2,
  },
  {
    word: "of",
    start: 118.2,
    end: 118.34,
  },
  {
    word: "dental",
    start: 118.34,
    end: 118.66,
  },
  {
    word: "caries.",
    start: 118.66,
    end: 119.14,
  },
  {
    word: "Her",
    start: 121.12,
    end: 121.34,
  },
  {
    word: "gums,",
    start: 121.34,
    end: 121.92,
  },
  {
    word: "there's",
    start: 121.92,
    end: 122.62,
  },
  {
    word: "no",
    start: 122.62,
    end: 122.78,
  },
  {
    word: "signs",
    start: 122.78,
    end: 122.96,
  },
  {
    word: "of",
    start: 122.96,
    end: 123.14,
  },
  {
    word: "gingivitis",
    start: 123.14,
    end: 123.7,
  },
  {
    word: "or",
    start: 123.7,
    end: 124.26,
  },
  {
    word: "edema.",
    start: 124.26,
    end: 124.7,
  },
  {
    word: "They",
    start: 126.96,
    end: 127.34,
  },
  {
    word: "are",
    start: 127.34,
    end: 127.5,
  },
  {
    word: "pink",
    start: 127.5,
    end: 127.96,
  },
  {
    word: "and",
    start: 127.96,
    end: 128.42,
  },
  {
    word: "moist.",
    start: 128.42,
    end: 128.88,
  },
  {
    word: "Her",
    start: 130.18,
    end: 131.4,
  },
  {
    word: "neck,",
    start: 131.4,
    end: 131.86,
  },
  {
    word: "I'll",
    start: 131.86,
    end: 132.52,
  },
  {
    word: "do",
    start: 132.52,
    end: 132.68,
  },
  {
    word: "her",
    start: 132.68,
    end: 132.86,
  },
  {
    word: "neck.",
    start: 132.86,
    end: 134.12,
  },
  {
    word: "Her",
    start: 133.94,
    end: 134.54,
  },
  {
    word: "trachea",
    start: 134.54,
    end: 135.08,
  },
  {
    word: "is",
    start: 135.08,
    end: 135.4,
  },
  {
    word: "midline.",
    start: 135.4,
    end: 142.04,
  },
  {
    word: "Her",
    start: 141.56,
    end: 142.18,
  },
  {
    word: "parotid",
    start: 142.18,
    end: 142.5,
  },
  {
    word: "pulses",
    start: 142.5,
    end: 142.96,
  },
  {
    word: "are",
    start: 142.96,
    end: 143.72,
  },
  {
    word: "grade",
    start: 143.72,
    end: 144.04,
  },
  {
    word: "two",
    start: 144.04,
    end: 144.3,
  },
  {
    word: "on",
    start: 144.3,
    end: 144.6,
  },
  {
    word: "both",
    start: 144.6,
    end: 144.9,
  },
  {
    word: "sides.",
    start: 144.9,
    end: 151.08,
  },
  {
    word: "I'm",
    start: 150.56,
    end: 151.24,
  },
  {
    word: "just",
    start: 151.24,
    end: 151.42,
  },
  {
    word: "going",
    start: 151.42,
    end: 151.5,
  },
  {
    word: "to",
    start: 151.5,
    end: 151.54,
  },
  {
    word: "listen",
    start: 151.54,
    end: 151.78,
  },
  {
    word: "to",
    start: 151.78,
    end: 151.94,
  },
  {
    word: "your",
    start: 151.94,
    end: 152.06,
  },
  {
    word: "neck",
    start: 152.06,
    end: 152.2,
  },
  {
    word: "so",
    start: 152.2,
    end: 152.34,
  },
  {
    word: "if",
    start: 152.34,
    end: 152.48,
  },
  {
    word: "you",
    start: 152.48,
    end: 152.56,
  },
  {
    word: "could",
    start: 152.56,
    end: 152.62,
  },
  {
    word: "just",
    start: 152.6053,
    end: 152.78531,
  },
  {
    word: "hold",
    start: 152.78531,
    end: 152.9053,
  },
  {
    word: "your",
    start: 152.9053,
    end: 153.1053,
  },
  {
    word: "breath",
    start: 153.1053,
    end: 153.3253,
  },
  {
    word: "for",
    start: 153.3253,
    end: 153.50531,
  },
  {
    word: "me",
    start: 153.50531,
    end: 153.7053,
  },
  {
    word: "every",
    start: 153.7053,
    end: 153.9653,
  },
  {
    word: "time",
    start: 153.9653,
    end: 154.08531,
  },
  {
    word: "my",
    start: 154.08531,
    end: 154.3453,
  },
  {
    word: "stethoscope",
    start: 154.3453,
    end: 154.6053,
  },
  {
    word: "touches",
    start: 154.6053,
    end: 154.9853,
  },
  {
    word: "you.",
    start: 154.9853,
    end: 155.3253,
  },
  {
    word: "There",
    start: 164.8053,
    end: 165.2453,
  },
  {
    word: "are",
    start: 165.2453,
    end: 165.4053,
  },
  {
    word: "no",
    start: 165.4053,
    end: 165.5453,
  },
  {
    word: "breweries.",
    start: 165.5453,
    end: 166.4653,
  },
  {
    word: "And",
    start: 166.94531,
    end: 167.1853,
  },
  {
    word: "then",
    start: 167.1853,
    end: 167.42531,
  },
  {
    word: "if",
    start: 167.42531,
    end: 167.5253,
  },
  {
    word: "you",
    start: 167.5253,
    end: 167.64531,
  },
  {
    word: "could",
    start: 167.64531,
    end: 167.7653,
  },
  {
    word: "just",
    start: 167.7653,
    end: 167.8853,
  },
  {
    word: "turn",
    start: 167.8853,
    end: 168.1053,
  },
  {
    word: "your",
    start: 168.1053,
    end: 168.2453,
  },
  {
    word: "neck",
    start: 168.2453,
    end: 168.50531,
  },
  {
    word: "side",
    start: 168.50531,
    end: 168.8253,
  },
  {
    word: "to",
    start: 168.8253,
    end: 169.0253,
  },
  {
    word: "side",
    start: 169.0253,
    end: 169.36531,
  },
  {
    word: "for",
    start: 169.36531,
    end: 169.5653,
  },
  {
    word: "me.",
    start: 169.5653,
    end: 169.8453,
  },
  {
    word: "There's",
    start: 169.4853,
    end: 170.7453,
  },
  {
    word: "no",
    start: 170.7453,
    end: 170.94531,
  },
  {
    word: "signs",
    start: 170.94531,
    end: 171.1853,
  },
  {
    word: "of",
    start: 171.1853,
    end: 171.3453,
  },
  {
    word: "JVD.",
    start: 171.3453,
    end: 171.92531,
  },
  {
    word: "Now",
    start: 173.0653,
    end: 173.2653,
  },
  {
    word: "I'm",
    start: 173.2653,
    end: 173.4053,
  },
  {
    word: "going",
    start: 173.4053,
    end: 173.5253,
  },
  {
    word: "to",
    start: 173.5253,
    end: 173.58531,
  },
  {
    word: "listen",
    start: 173.58531,
    end: 173.72531,
  },
  {
    word: "to",
    start: 173.72531,
    end: 173.86531,
  },
  {
    word: "your",
    start: 173.86531,
    end: 174.00531,
  },
  {
    word: "lungs.",
    start: 174.00531,
    end: 174.42531,
  },
  {
    word: "Every",
    start: 174.42531,
    end: 174.5653,
  },
  {
    word: "time",
    start: 174.5653,
    end: 174.6853,
  },
  {
    word: "my",
    start: 174.6853,
    end: 174.9053,
  },
  {
    word: "stethoscope",
    start: 174.9053,
    end: 175.2053,
  },
  {
    word: "touches",
    start: 175.2053,
    end: 175.4853,
  },
  {
    word: "your",
    start: 175.4853,
    end: 175.64531,
  },
  {
    word: "chest",
    start: 175.64531,
    end: 175.8453,
  },
  {
    word: "you",
    start: 175.8453,
    end: 175.9653,
  },
  {
    word: "can",
    start: 175.9653,
    end: 176.1053,
  },
  {
    word: "just",
    start: 176.1053,
    end: 176.2653,
  },
  {
    word: "take",
    start: 176.2653,
    end: 176.3853,
  },
  {
    word: "a",
    start: 176.3853,
    end: 176.4853,
  },
  {
    word: "deep",
    start: 176.4853,
    end: 176.6853,
  },
  {
    word: "breath.",
    start: 176.6853,
    end: 177.4653,
  },
  {
    word: "your",
    start: 208.9853,
    end: 209.1253,
  },
  {
    word: "heart.",
    start: 209.1253,
    end: 214.4853,
  },
  {
    word: "Aortic,",
    start: 214.4853,
    end: 214.8453,
  },
  {
    word: "right",
    start: 214.8453,
    end: 215.64531,
  },
  {
    word: "sternal",
    start: 215.64531,
    end: 216.1253,
  },
  {
    word: "border,",
    start: 216.1253,
    end: 216.8653,
  },
  {
    word: "second",
    start: 216.8653,
    end: 217.0253,
  },
  {
    word: "intercostal",
    start: 217.0253,
    end: 217.6253,
  },
  {
    word: "space.",
    start: 217.6253,
    end: 220.92531,
  },
  {
    word: "Clomonic,",
    start: 220.92531,
    end: 221.78531,
  },
  {
    word: "left",
    start: 221.78531,
    end: 221.88531,
  },
  {
    word: "sternal",
    start: 221.6853,
    end: 222.3453,
  },
  {
    word: "border,",
    start: 222.3453,
    end: 222.92531,
  },
  {
    word: "second",
    start: 222.92531,
    end: 223.2053,
  },
  {
    word: "intercostal",
    start: 223.2053,
    end: 223.78531,
  },
  {
    word: "space.",
    start: 223.78531,
    end: 226.4653,
  },
  {
    word: "Herbs,",
    start: 228.0453,
    end: 229.44531,
  },
  {
    word: "third",
    start: 229.44531,
    end: 229.60532,
  },
  {
    word: "intercostal",
    start: 229.60532,
    end: 230.3253,
  },
  {
    word: "space.",
    start: 230.3253,
    end: 231.8653,
  },
  {
    word: "Tricuspid,",
    start: 235.00531,
    end: 235.9853,
  },
  {
    word: "fourth",
    start: 235.9853,
    end: 236.1853,
  },
  {
    word: "intercostal",
    start: 236.1853,
    end: 236.7453,
  },
  {
    word: "space.",
    start: 236.7453,
    end: 237.94531,
  },
  {
    word: "Mitral,",
    start: 240.10532,
    end: 241.1253,
  },
  {
    word: "fifth",
    start: 241.1253,
    end: 241.28531,
  },
  {
    word: "intercostal",
    start: 241.28531,
    end: 241.94531,
  },
  {
    word: "space,",
    start: 241.94531,
    end: 242.3053,
  },
  {
    word: "midclavicular",
    start: 242.3053,
    end: 242.92531,
  },
  {
    word: "line.",
    start: 242.92531,
    end: 243.4653,
  },
  {
    word: "I",
    start: 244.22531,
    end: 244.50531,
  },
  {
    word: "would",
    start: 244.50531,
    end: 244.64531,
  },
  {
    word: "also",
    start: 244.64531,
    end: 244.8653,
  },
  {
    word: "wait",
    start: 244.8653,
    end: 245.10532,
  },
  {
    word: "here",
    start: 245.10532,
    end: 245.2453,
  },
  {
    word: "for",
    start: 245.2453,
    end: 245.4053,
  },
  {
    word: "60",
    start: 245.4053,
    end: 245.8453,
  },
  {
    word: "seconds",
    start: 245.8453,
    end: 246.16531,
  },
  {
    word: "to",
    start: 246.16531,
    end: 246.4053,
  },
  {
    word: "listen",
    start: 246.4053,
    end: 246.5453,
  },
  {
    word: "for",
    start: 246.5453,
    end: 246.6853,
  },
  {
    word: "the",
    start: 246.6853,
    end: 246.8653,
  },
  {
    word: "apical",
    start: 246.8653,
    end: 247.10532,
  },
  {
    word: "pulse.",
    start: 247.10532,
    end: 249.3453,
  },
  {
    word: "Her",
    start: 252.0453,
    end: 252.16531,
  },
  {
    word: "heart",
    start: 252.16531,
    end: 252.4653,
  },
  {
    word: "sounds",
    start: 252.4653,
    end: 252.66531,
  },
  {
    word: "are",
    start: 252.66531,
    end: 252.78531,
  },
  {
    word: "normal",
    start: 252.78531,
    end: 253.22531,
  },
  {
    word: "with",
    start: 253.22531,
    end: 254.5253,
  },
  {
    word: "normal",
    start: 254.5253,
    end: 254.8453,
  },
  {
    word: "rhythm.",
    start: 254.8453,
    end: 257.7453,
  },
  {
    word: "And",
    start: 257.3453,
    end: 257.8653,
  },
  {
    word: "now",
    start: 257.8653,
    end: 258.0253,
  },
  {
    word: "I'm",
    start: 258.0253,
    end: 258.1853,
  },
  {
    word: "going",
    start: 258.1853,
    end: 258.2853,
  },
  {
    word: "to",
    start: 258.2853,
    end: 258.3453,
  },
  {
    word: "go",
    start: 258.3453,
    end: 258.70532,
  },
  {
    word: "back",
    start: 258.70532,
    end: 259.5853,
  },
  {
    word: "up",
    start: 259.5853,
    end: 259.8653,
  },
  {
    word: "and",
    start: 259.8653,
    end: 260.0653,
  },
  {
    word: "listen",
    start: 260.0653,
    end: 260.2853,
  },
  {
    word: "for",
    start: 260.2853,
    end: 260.4653,
  },
  {
    word: "murmurs.",
    start: 260.4653,
    end: 261.8053,
  },
  {
    word: "there's",
    start: 280.82532,
    end: 281.0653,
  },
  {
    word: "no",
    start: 281.0653,
    end: 281.20532,
  },
  {
    word: "presence",
    start: 281.20532,
    end: 281.5653,
  },
  {
    word: "of",
    start: 281.5653,
    end: 281.7453,
  },
  {
    word: "murmurs.",
    start: 281.7453,
    end: 283.9453,
  },
  {
    word: "Now",
    start: 283.9453,
    end: 284.0453,
  },
  {
    word: "I'm",
    start: 284.0453,
    end: 284.20532,
  },
  {
    word: "going",
    start: 284.20532,
    end: 284.32532,
  },
  {
    word: "to",
    start: 284.32532,
    end: 284.4853,
  },
  {
    word: "listen",
    start: 284.4853,
    end: 284.58533,
  },
  {
    word: "to",
    start: 284.58533,
    end: 284.7453,
  },
  {
    word: "your",
    start: 284.7453,
    end: 284.9053,
  },
  {
    word: "back.",
    start: 284.9053,
    end: 287.0253,
  },
  {
    word: "And",
    start: 294.76532,
    end: 294.8653,
  },
  {
    word: "then",
    start: 294.8653,
    end: 295.0053,
  },
  {
    word: "you",
    start: 295.0053,
    end: 295.08533,
  },
  {
    word: "can",
    start: 295.08533,
    end: 295.2453,
  },
  {
    word: "just",
    start: 295.2453,
    end: 295.3653,
  },
  {
    word: "take",
    start: 295.3653,
    end: 295.5053,
  },
  {
    word: "a",
    start: 295.5053,
    end: 295.6053,
  },
  {
    word: "deep",
    start: 295.6053,
    end: 295.76532,
  },
  {
    word: "breath",
    start: 295.76532,
    end: 295.9253,
  },
  {
    word: "again",
    start: 295.9253,
    end: 296.14532,
  },
  {
    word: "for",
    start: 296.14532,
    end: 296.3053,
  },
  {
    word: "me",
    start: 296.3053,
    end: 296.3853,
  },
  {
    word: "every",
    start: 296.3853,
    end: 296.5253,
  },
  {
    word: "time",
    start: 296.5253,
    end: 296.6853,
  },
  {
    word: "I",
    start: 296.6853,
    end: 296.7853,
  },
  {
    word: "set",
    start: 296.7853,
    end: 296.9053,
  },
  {
    word: "the",
    start: 296.9053,
    end: 297.0053,
  },
  {
    word: "scope",
    start: 297.0053,
    end: 297.1253,
  },
  {
    word: "touches",
    start: 297.0053,
    end: 297.4253,
  },
  {
    word: "you.",
    start: 297.4253,
    end: 298.08533,
  },
  {
    word: "Thank",
    start: 313.14532,
    end: 313.16528,
  },
  {
    word: "you.",
    start: 313.16528,
    end: 313.1853,
  },
  {
    word: "Good.",
    start: 322.8106,
    end: 322.9906,
  },
  {
    word: "Can",
    start: 323.07062,
    end: 323.0906,
  },
  {
    word: "I",
    start: 323.0906,
    end: 323.2106,
  },
  {
    word: "cross",
    start: 323.2106,
    end: 323.4306,
  },
  {
    word: "your",
    start: 323.4306,
    end: 323.5906,
  },
  {
    word: "arms",
    start: 323.5906,
    end: 323.9306,
  },
  {
    word: "for",
    start: 323.9306,
    end: 324.07062,
  },
  {
    word: "me?",
    start: 324.07062,
    end: 331.83063,
  },
  {
    word: "Her",
    start: 342.01062,
    end: 342.57062,
  },
  {
    word: "lungs",
    start: 342.57062,
    end: 342.8106,
  },
  {
    word: "sounds",
    start: 342.8106,
    end: 343.0506,
  },
  {
    word: "are",
    start: 343.0506,
    end: 343.2106,
  },
  {
    word: "clear.",
    start: 343.2106,
    end: 345.4706,
  },
  {
    word: "Can",
    start: 345.01062,
    end: 345.5506,
  },
  {
    word: "you",
    start: 345.5506,
    end: 345.6306,
  },
  {
    word: "bend",
    start: 345.6306,
    end: 345.7706,
  },
  {
    word: "forward",
    start: 345.7706,
    end: 346.0306,
  },
  {
    word: "for",
    start: 346.0306,
    end: 346.2106,
  },
  {
    word: "me?",
    start: 346.2106,
    end: 347.9906,
  },
  {
    word: "spine",
    start: 350.29062,
    end: 350.67062,
  },
  {
    word: "is",
    start: 350.67062,
    end: 350.9106,
  },
  {
    word: "straight",
    start: 350.9106,
    end: 351.2506,
  },
  {
    word: "with",
    start: 351.2506,
    end: 351.5306,
  },
  {
    word: "no",
    start: 351.5306,
    end: 351.9706,
  },
  {
    word: "vertebrae",
    start: 351.9706,
    end: 352.5506,
  },
  {
    word: "sticking",
    start: 352.5506,
    end: 352.8106,
  },
  {
    word: "out",
    start: 352.8106,
    end: 353.23062,
  },
  {
    word: "and",
    start: 353.23062,
    end: 354.2106,
  },
  {
    word: "then",
    start: 354.2106,
    end: 354.4106,
  },
  {
    word: "can",
    start: 354.4106,
    end: 354.5306,
  },
  {
    word: "you",
    start: 354.5306,
    end: 354.6506,
  },
  {
    word: "just",
    start: 354.6506,
    end: 354.8106,
  },
  {
    word: "tell",
    start: 354.8106,
    end: 354.9906,
  },
  {
    word: "me",
    start: 354.4106,
    end: 355.01062,
  },
  {
    word: "if",
    start: 355.01062,
    end: 355.1506,
  },
  {
    word: "you",
    start: 355.1506,
    end: 355.17062,
  },
  {
    word: "have",
    start: 355.17062,
    end: 355.2706,
  },
  {
    word: "any",
    start: 355.2706,
    end: 355.4306,
  },
  {
    word: "tenderness",
    start: 355.4306,
    end: 355.79062,
  },
  {
    word: "when",
    start: 355.79062,
    end: 356.01062,
  },
  {
    word: "I",
    start: 356.01062,
    end: 356.4306,
  },
  {
    word: "when",
    start: 356.4306,
    end: 356.45062,
  },
  {
    word: "I",
    start: 356.45062,
    end: 356.6906,
  },
  {
    word: "percuss?",
    start: 356.6906,
    end: 362.7506,
  },
  {
    word: "Good",
    start: 362.7506,
    end: 362.7706,
  },
  {
    word: "so",
    start: 362.7706,
    end: 362.9906,
  },
  {
    word: "there's",
    start: 362.9906,
    end: 363.3106,
  },
  {
    word: "no",
    start: 363.3106,
    end: 363.4906,
  },
  {
    word: "tenderness",
    start: 363.3706,
    end: 363.9306,
  },
  {
    word: "when",
    start: 363.9306,
    end: 364.23062,
  },
  {
    word: "I",
    start: 364.23062,
    end: 364.4706,
  },
  {
    word: "assess",
    start: 364.4706,
    end: 364.7706,
  },
  {
    word: "the",
    start: 364.7706,
    end: 364.9706,
  },
  {
    word: "costovertebral",
    start: 364.9706,
    end: 365.4306,
  },
  {
    word: "angle",
    start: 365.4306,
    end: 365.95062,
  },
  {
    word: "and",
    start: 365.95062,
    end: 368.73062,
  },
  {
    word: "then",
    start: 368.73062,
    end: 369.3706,
  },
  {
    word: "her",
    start: 369.3706,
    end: 370.4106,
  },
  {
    word: "AMP",
    start: 370.4106,
    end: 370.7506,
  },
  {
    word: "diameter",
    start: 370.8106,
    end: 371.3106,
  },
  {
    word: "is",
    start: 371.3106,
    end: 372.07062,
  },
  {
    word: "1",
    start: 372.07062,
    end: 372.79062,
  },
  {
    word: "to",
    start: 372.79062,
    end: 373.6106,
  },
  {
    word: "2.",
    start: 373.6106,
    end: 374.85062,
  },
  {
    word: "Now",
    start: 374.85062,
    end: 375.6706,
  },
  {
    word: "I'm",
    start: 375.6706,
    end: 375.83063,
  },
  {
    word: "going",
    start: 375.83063,
    end: 375.9306,
  },
  {
    word: "to",
    start: 375.9306,
    end: 376.07062,
  },
  {
    word: "assess",
    start: 376.07062,
    end: 376.27063,
  },
  {
    word: "your",
    start: 376.27063,
    end: 376.4706,
  },
  {
    word: "arms.",
    start: 376.4706,
    end: 378.4306,
  },
  {
    word: "The",
    start: 378.4306,
    end: 379.23062,
  },
  {
    word: "skin",
    start: 379.23062,
    end: 379.4106,
  },
  {
    word: "on",
    start: 379.4106,
    end: 379.6306,
  },
  {
    word: "her",
    start: 379.6306,
    end: 379.79062,
  },
  {
    word: "arms",
    start: 379.79062,
    end: 380.23062,
  },
  {
    word: "is",
    start: 380.23062,
    end: 380.7106,
  },
  {
    word: "intact",
    start: 380.7106,
    end: 381.2106,
  },
  {
    word: "and",
    start: 381.2106,
    end: 382.1506,
  },
  {
    word: "dry.",
    start: 382.1506,
    end: 383.4906,
  },
  {
    word: "She",
    start: 383.4906,
    end: 383.57062,
  },
  {
    word: "appears",
    start: 383.1306,
    end: 383.89062,
  },
  {
    word: "to",
    start: 383.89062,
    end: 384.0506,
  },
  {
    word: "be",
    start: 384.0506,
    end: 384.1906,
  },
  {
    word: "warm.",
    start: 384.1906,
    end: 384.85062,
  },
  {
    word: "Her",
    start: 384.85062,
    end: 384.9706,
  },
  {
    word: "skin",
    start: 384.9706,
    end: 385.1906,
  },
  {
    word: "color",
    start: 385.1906,
    end: 385.45062,
  },
  {
    word: "is",
    start: 385.45062,
    end: 385.6906,
  },
  {
    word: "normal",
    start: 385.6906,
    end: 385.83063,
  },
  {
    word: "for",
    start: 385.83063,
    end: 386.0306,
  },
  {
    word: "ethnicity.",
    start: 386.0306,
    end: 387.79062,
  },
  {
    word: "Her",
    start: 387.79062,
    end: 388.1506,
  },
  {
    word: "brachial",
    start: 388.1506,
    end: 389.1506,
  },
  {
    word: "pulses",
    start: 389.1506,
    end: 389.4906,
  },
  {
    word: "are",
    start: 389.4906,
    end: 390.4306,
  },
  {
    word: "equal",
    start: 390.4306,
    end: 391.8106,
  },
  {
    word: "and",
    start: 391.8106,
    end: 391.9706,
  },
  {
    word: "bilateral",
    start: 391.9906,
    end: 392.57062,
  },
  {
    word: "plus",
    start: 392.57062,
    end: 394.07062,
  },
  {
    word: "two",
    start: 394.07062,
    end: 394.3706,
  },
  {
    word: "grade.",
    start: 394.3706,
    end: 397.7106,
  },
  {
    word: "Her",
    start: 397.7106,
    end: 397.77063,
  },
  {
    word: "radial",
    start: 397.77063,
    end: 398.1506,
  },
  {
    word: "pulses",
    start: 398.1506,
    end: 398.5306,
  },
  {
    word: "are",
    start: 398.5306,
    end: 398.9906,
  },
  {
    word: "equal",
    start: 398.9906,
    end: 399.2106,
  },
  {
    word: "and",
    start: 399.2106,
    end: 399.3706,
  },
  {
    word: "bilateral",
    start: 399.3706,
    end: 399.8106,
  },
  {
    word: "plus",
    start: 399.8106,
    end: 400.1706,
  },
  {
    word: "two",
    start: 400.1706,
    end: 400.4106,
  },
  {
    word: "grade.",
    start: 400.4106,
    end: 402.27063,
  },
  {
    word: "And",
    start: 402.27063,
    end: 402.39062,
  },
  {
    word: "then",
    start: 401.9306,
    end: 402.5906,
  },
  {
    word: "can",
    start: 402.5906,
    end: 402.6906,
  },
  {
    word: "you",
    start: 402.6906,
    end: 402.8706,
  },
  {
    word: "grasp",
    start: 402.8706,
    end: 402.9906,
  },
  {
    word: "my",
    start: 402.9906,
    end: 403.1306,
  },
  {
    word: "fingers",
    start: 403.1306,
    end: 403.4306,
  },
  {
    word: "for",
    start: 403.4306,
    end: 403.57062,
  },
  {
    word: "me?",
    start: 403.57062,
    end: 404.33063,
  },
  {
    word: "Good.",
    start: 404.33063,
    end: 405.1506,
  },
  {
    word: "And",
    start: 405.1506,
    end: 405.33063,
  },
  {
    word: "then",
    start: 405.33063,
    end: 405.4706,
  },
  {
    word: "can",
    start: 405.4706,
    end: 405.6106,
  },
  {
    word: "you",
    start: 405.6106,
    end: 405.6906,
  },
  {
    word: "go",
    start: 405.6906,
    end: 405.79062,
  },
  {
    word: "like",
    start: 405.79062,
    end: 405.9906,
  },
  {
    word: "this?",
    start: 405.9906,
    end: 407.9106,
  },
  {
    word: "Her",
    start: 407.9106,
    end: 408.5306,
  },
  {
    word: "grasp",
    start: 408.5306,
    end: 408.8106,
  },
  {
    word: "strength",
    start: 408.8106,
    end: 409.1506,
  },
  {
    word: "is",
    start: 408.8706,
    end: 409.6106,
  },
  {
    word: "appropriate",
    start: 409.6106,
    end: 410.79062,
  },
  {
    word: "and",
    start: 410.79062,
    end: 411.2506,
  },
  {
    word: "there's",
    start: 411.2506,
    end: 411.4706,
  },
  {
    word: "no",
    start: 411.4706,
    end: 411.6906,
  },
  {
    word: "signs",
    start: 411.6906,
    end: 411.85062,
  },
  {
    word: "of",
    start: 411.85062,
    end: 412.07062,
  },
  {
    word: "clubbing",
    start: 412.07062,
    end: 412.29062,
  },
  {
    word: "in",
    start: 412.29062,
    end: 412.4306,
  },
  {
    word: "her",
    start: 412.4306,
    end: 412.5506,
  },
  {
    word: "arms",
    start: 412.5506,
    end: 412.8706,
  },
  {
    word: "or",
    start: 412.8706,
    end: 413.1706,
  },
  {
    word: "in",
    start: 413.1706,
    end: 413.3106,
  },
  {
    word: "her",
    start: 413.3106,
    end: 413.4306,
  },
  {
    word: "hands.",
    start: 413.4306,
    end: 417.29062,
  },
  {
    word: "There's",
    start: 417.29062,
    end: 418.1506,
  },
  {
    word: "cap",
    start: 418.1506,
    end: 418.35062,
  },
  {
    word: "refill",
    start: 418.35062,
    end: 418.6706,
  },
  {
    word: "both",
    start: 418.9106,
    end: 420.0906,
  },
  {
    word: "fingers",
    start: 420.0906,
    end: 421.57062,
  },
  {
    word: "and",
    start: 421.57062,
    end: 423.5906,
  },
  {
    word: "it",
    start: 423.5906,
    end: 423.7106,
  },
  {
    word: "comes",
    start: 423.7106,
    end: 423.9106,
  },
  {
    word: "back",
    start: 423.9106,
    end: 424.1506,
  },
  {
    word: "within",
    start: 424.1506,
    end: 424.3706,
  },
  {
    word: "less",
    start: 424.3706,
    end: 424.79062,
  },
  {
    word: "than",
    start: 424.79062,
    end: 424.89062,
  },
  {
    word: "three",
    start: 424.89062,
    end: 425.0306,
  },
  {
    word: "seconds.",
    start: 425.0306,
    end: 426.39062,
  },
  {
    word: "And",
    start: 426.39062,
    end: 426.4106,
  },
  {
    word: "then",
    start: 426.4106,
    end: 426.4306,
  },
  {
    word: "now",
    start: 426.4306,
    end: 426.45062,
  },
  {
    word: "I'm",
    start: 426.45062,
    end: 426.4706,
  },
  {
    word: "going",
    start: 426.4706,
    end: 426.4906,
  },
  {
    word: "to",
    start: 426.4906,
    end: 426.51062,
  },
  {
    word: "assess",
    start: 426.51062,
    end: 426.5306,
  },
  {
    word: "your",
    start: 426.5306,
    end: 426.5506,
  },
  {
    word: "abdomen.",
    start: 426.5506,
    end: 426.57062,
  },
  {
    word: "Lay",
    start: 426.35062,
    end: 430.2506,
  },
  {
    word: "down",
    start: 430.2506,
    end: 430.5506,
  },
  {
    word: "for",
    start: 430.5506,
    end: 430.7506,
  },
  {
    word: "me.",
    start: 430.7506,
    end: 431.0906,
  },
  {
    word: "There's",
    start: 436.71063,
    end: 437.0306,
  },
  {
    word: "no",
    start: 437.0306,
    end: 437.1706,
  },
  {
    word: "lesions",
    start: 437.1706,
    end: 437.6506,
  },
  {
    word: "or",
    start: 437.6506,
    end: 438.35062,
  },
  {
    word: "scars",
    start: 438.35062,
    end: 438.7506,
  },
  {
    word: "to",
    start: 438.7506,
    end: 438.9306,
  },
  {
    word: "be",
    start: 438.9306,
    end: 439.0906,
  },
  {
    word: "noted.",
    start: 439.0906,
    end: 439.4706,
  },
  {
    word: "The",
    start: 439.4706,
    end: 439.57062,
  },
  {
    word: "umbilicus",
    start: 439.57062,
    end: 440.07062,
  },
  {
    word: "is",
    start: 440.07062,
    end: 440.3106,
  },
  {
    word: "midline.",
    start: 440.3106,
    end: 441.8106,
  },
  {
    word: "The",
    start: 441.8106,
    end: 441.89062,
  },
  {
    word: "contour",
    start: 441.89062,
    end: 442.27063,
  },
  {
    word: "of",
    start: 442.27063,
    end: 442.5506,
  },
  {
    word: "her",
    start: 442.5506,
    end: 442.6306,
  },
  {
    word: "stomach",
    start: 442.6306,
    end: 442.9306,
  },
  {
    word: "is",
    start: 442.9306,
    end: 443.29062,
  },
  {
    word: "flat.",
    start: 443.29062,
    end: 444.4306,
  },
  {
    word: "Her",
    start: 444.4306,
    end: 444.45062,
  },
  {
    word: "stomach",
    start: 444.45062,
    end: 444.6906,
  },
  {
    word: "is",
    start: 444.6906,
    end: 444.95062,
  },
  {
    word: "symmetric.",
    start: 444.95062,
    end: 445.39062,
  },
  {
    word: "asymmetric,",
    start: 444.9106,
    end: 454.6706,
  },
  {
    word: "right",
    start: 454.6706,
    end: 454.89062,
  },
  {
    word: "upper",
    start: 454.89062,
    end: 455.1706,
  },
  {
    word: "quadrant",
    start: 455.1706,
    end: 455.7506,
  },
  {
    word: "liver",
    start: 455.7506,
    end: 456.0306,
  },
  {
    word: "and",
    start: 456.0306,
    end: 456.33063,
  },
  {
    word: "gallbladder,",
    start: 456.33063,
    end: 459.6106,
  },
  {
    word: "left",
    start: 459.6106,
    end: 459.9306,
  },
  {
    word: "upper",
    start: 459.9306,
    end: 460.6106,
  },
  {
    word: "quadrant",
    start: 460.53592,
    end: 461.15594,
  },
  {
    word: "stomach",
    start: 461.15594,
    end: 462.29593,
  },
  {
    word: "and",
    start: 462.29593,
    end: 462.57593,
  },
  {
    word: "spleen",
    start: 462.57593,
    end: 462.89594,
  },
  {
    word: "left",
    start: 465.51593,
    end: 465.87595,
  },
  {
    word: "lower",
    start: 465.87595,
    end: 466.23593,
  },
  {
    word: "quadrant",
    start: 466.23593,
    end: 466.99594,
  },
  {
    word: "sigmoid",
    start: 466.99594,
    end: 467.65594,
  },
  {
    word: "colon",
    start: 467.65594,
    end: 468.07593,
  },
  {
    word: "and",
    start: 468.07593,
    end: 468.35593,
  },
  {
    word: "ovary",
    start: 468.35593,
    end: 468.79593,
  },
  {
    word: "right",
    start: 470.93594,
    end: 471.27594,
  },
  {
    word: "lower",
    start: 471.27594,
    end: 471.53592,
  },
  {
    word: "quadrant",
    start: 471.53592,
    end: 472.17593,
  },
  {
    word: "ascending",
    start: 472.17593,
    end: 474.17593,
  },
  {
    word: "colon",
    start: 474.17593,
    end: 474.73593,
  },
  {
    word: "and",
    start: 474.73593,
    end: 474.91592,
  },
  {
    word: "appendix",
    start: 474.91592,
    end: 475.59595,
  },
  {
    word: "there's",
    start: 478.29593,
    end: 478.63593,
  },
  {
    word: "bowel",
    start: 478.63593,
    end: 478.85593,
  },
  {
    word: "sounds",
    start: 478.85593,
    end: 479.11594,
  },
  {
    word: "in",
    start: 479.11594,
    end: 479.31592,
  },
  {
    word: "all",
    start: 479.31592,
    end: 479.53592,
  },
  {
    word: "four",
    start: 479.53592,
    end: 479.69592,
  },
  {
    word: "quadrants",
    start: 479.69592,
    end: 480.17593,
  },
  {
    word: "and",
    start: 481.77594,
    end: 481.99594,
  },
  {
    word: "then",
    start: 481.99594,
    end: 482.11594,
  },
  {
    word: "I'm",
    start: 482.11594,
    end: 482.21594,
  },
  {
    word: "just",
    start: 482.21594,
    end: 482.37595,
  },
  {
    word: "going",
    start: 482.37595,
    end: 482.47592,
  },
  {
    word: "to",
    start: 482.47592,
    end: 482.59595,
  },
  {
    word: "percuss",
    start: 482.59595,
    end: 482.83594,
  },
  {
    word: "there's",
    start: 484.61594,
    end: 484.97592,
  },
  {
    word: "dullness",
    start: 484.97592,
    end: 485.25592,
  },
  {
    word: "over",
    start: 485.25592,
    end: 485.55594,
  },
  {
    word: "the",
    start: 485.55594,
    end: 485.69592,
  },
  {
    word: "liver",
    start: 485.69592,
    end: 486.07593,
  },
  {
    word: "all",
    start: 485.87595,
    end: 491.37592,
  },
  {
    word: "remaining",
    start: 491.37592,
    end: 491.77594,
  },
  {
    word: "quadrants",
    start: 491.77594,
    end: 492.31592,
  },
  {
    word: "have",
    start: 492.31592,
    end: 492.69592,
  },
  {
    word: "tympani",
    start: 492.69592,
    end: 493.03595,
  },
  {
    word: "and",
    start: 493.03595,
    end: 494.71594,
  },
  {
    word: "then",
    start: 494.71594,
    end: 494.91592,
  },
  {
    word: "I'm",
    start: 494.91592,
    end: 495.03595,
  },
  {
    word: "just",
    start: 495.03595,
    end: 495.17593,
  },
  {
    word: "going",
    start: 495.17593,
    end: 495.29593,
  },
  {
    word: "to",
    start: 495.29593,
    end: 495.39594,
  },
  {
    word: "palpate",
    start: 495.39594,
    end: 495.69592,
  },
  {
    word: "your",
    start: 495.69592,
    end: 495.83594,
  },
  {
    word: "stomach",
    start: 495.57593,
    end: 496.13593,
  },
  {
    word: "and",
    start: 496.13593,
    end: 496.29593,
  },
  {
    word: "then",
    start: 496.29593,
    end: 496.41592,
  },
  {
    word: "you",
    start: 496.41592,
    end: 496.51593,
  },
  {
    word: "can",
    start: 496.51593,
    end: 496.65594,
  },
  {
    word: "tell",
    start: 496.65594,
    end: 496.77594,
  },
  {
    word: "me",
    start: 496.77594,
    end: 496.87592,
  },
  {
    word: "if",
    start: 496.87592,
    end: 496.97592,
  },
  {
    word: "you",
    start: 496.97592,
    end: 497.03595,
  },
  {
    word: "have",
    start: 497.03595,
    end: 497.11594,
  },
  {
    word: "any",
    start: 497.11594,
    end: 497.27594,
  },
  {
    word: "pain",
    start: 497.27594,
    end: 497.55594,
  },
  {
    word: "or",
    start: 497.55594,
    end: 497.69592,
  },
  {
    word: "tenderness",
    start: 497.69592,
    end: 498.27594,
  },
  {
    word: "okay",
    start: 504.09595,
    end: 504.57593,
  },
  {
    word: "good",
    start: 504.57593,
    end: 506.41592,
  },
  {
    word: "and",
    start: 506.41592,
    end: 506.67593,
  },
  {
    word: "then",
    start: 506.67593,
    end: 506.81592,
  },
  {
    word: "you",
    start: 506.81592,
    end: 506.95593,
  },
  {
    word: "can",
    start: 506.95593,
    end: 507.17593,
  },
  {
    word: "sit",
    start: 507.17593,
    end: 507.33594,
  },
  {
    word: "up",
    start: 507.33594,
    end: 507.47592,
  },
  {
    word: "for",
    start: 507.47592,
    end: 507.63593,
  },
  {
    word: "me",
    start: 507.63593,
    end: 508.11594,
  },
  {
    word: "The",
    start: 507.79593,
    end: 511.89594,
  },
  {
    word: "skin",
    start: 511.89594,
    end: 512.1359,
  },
  {
    word: "on",
    start: 512.1359,
    end: 512.33594,
  },
  {
    word: "her",
    start: 512.33594,
    end: 512.47595,
  },
  {
    word: "legs",
    start: 512.47595,
    end: 512.9359,
  },
  {
    word: "is",
    start: 512.9359,
    end: 513.2559,
  },
  {
    word: "dry",
    start: 513.2559,
    end: 513.6759,
  },
  {
    word: "and",
    start: 513.6759,
    end: 513.9359,
  },
  {
    word: "intact.",
    start: 513.9359,
    end: 515.6759,
  },
  {
    word: "It",
    start: 515.6759,
    end: 515.71594,
  },
  {
    word: "is",
    start: 515.71594,
    end: 515.8759,
  },
  {
    word: "warm.",
    start: 515.8759,
    end: 517.1359,
  },
  {
    word: "Her",
    start: 517.1359,
    end: 517.1959,
  },
  {
    word: "hair",
    start: 517.1959,
    end: 517.39594,
  },
  {
    word: "distribution",
    start: 517.39594,
    end: 517.9359,
  },
  {
    word: "is",
    start: 517.9359,
    end: 518.6359,
  },
  {
    word: "even",
    start: 518.6359,
    end: 519.03595,
  },
  {
    word: "on",
    start: 519.03595,
    end: 519.41595,
  },
  {
    word: "both",
    start: 519.41595,
    end: 519.71594,
  },
  {
    word: "sides.",
    start: 519.71594,
    end: 520.45593,
  },
  {
    word: "And",
    start: 521.03595,
    end: 521.21594,
  },
  {
    word: "then",
    start: 521.21594,
    end: 521.3759,
  },
  {
    word: "can",
    start: 521.3759,
    end: 521.4959,
  },
  {
    word: "you",
    start: 521.4959,
    end: 521.61597,
  },
  {
    word: "just",
    start: 521.61597,
    end: 521.83594,
  },
  {
    word: "scoot",
    start: 521.83594,
    end: 522.0159,
  },
  {
    word: "out",
    start: 522.0159,
    end: 522.21594,
  },
  {
    word: "just",
    start: 522.21594,
    end: 522.41595,
  },
  {
    word: "a",
    start: 522.41595,
    end: 522.53595,
  },
  {
    word: "little",
    start: 522.53595,
    end: 522.6959,
  },
  {
    word: "bit",
    start: 522.6959,
    end: 522.83594,
  },
  {
    word: "more?",
    start: 522.83594,
    end: 523.27594,
  },
  {
    word: "Yeah.",
    start: 523.27594,
    end: 527.3759,
  },
  {
    word: "And",
    start: 527.3759,
    end: 527.45593,
  },
  {
    word: "you",
    start: 527.45593,
    end: 527.5759,
  },
  {
    word: "can",
    start: 527.5759,
    end: 527.77594,
  },
  {
    word: "kind",
    start: 527.77594,
    end: 527.9959,
  },
  {
    word: "of",
    start: 527.9959,
    end: 528.0159,
  },
  {
    word: "just",
    start: 528.0159,
    end: 528.15594,
  },
  {
    word: "relax",
    start: 528.15594,
    end: 528.53595,
  },
  {
    word: "your",
    start: 528.03595,
    end: 528.71594,
  },
  {
    word: "legs.",
    start: 528.71594,
    end: 529.35596,
  },
  {
    word: "Yeah.",
    start: 529.35596,
    end: 531.65594,
  },
  {
    word: "Her",
    start: 531.65594,
    end: 531.8759,
  },
  {
    word: "popliteal",
    start: 531.8759,
    end: 532.2559,
  },
  {
    word: "pulses",
    start: 532.2559,
    end: 532.53595,
  },
  {
    word: "are",
    start: 532.53595,
    end: 532.8759,
  },
  {
    word: "equal",
    start: 532.8759,
    end: 533.35596,
  },
  {
    word: "and",
    start: 533.35596,
    end: 533.5159,
  },
  {
    word: "bilateral",
    start: 533.5159,
    end: 534.09595,
  },
  {
    word: "plus",
    start: 534.09595,
    end: 534.5559,
  },
  {
    word: "two",
    start: 534.5559,
    end: 534.7559,
  },
  {
    word: "grade.",
    start: 534.7559,
    end: 535.1959,
  },
  {
    word: "Posterior",
    start: 538.95593,
    end: 539.47595,
  },
  {
    word: "tibialis",
    start: 539.47595,
    end: 540.23596,
  },
  {
    word: "pulses",
    start: 540.23596,
    end: 541.0559,
  },
  {
    word: "are",
    start: 541.0559,
    end: 541.65594,
  },
  {
    word: "equal",
    start: 541.65594,
    end: 541.95593,
  },
  {
    word: "and",
    start: 541.95593,
    end: 542.11597,
  },
  {
    word: "bilateral",
    start: 542.11597,
    end: 542.61597,
  },
  {
    word: "plus",
    start: 542.61597,
    end: 542.91595,
  },
  {
    word: "two",
    start: 542.91595,
    end: 543.11597,
  },
  {
    word: "grade.",
    start: 543.11597,
    end: 544.95593,
  },
  {
    word: "Dorsalis",
    start: 549.15594,
    end: 549.8159,
  },
  {
    word: "pedis",
    start: 549.8159,
    end: 550.27594,
  },
  {
    word: "pulses",
    start: 550.27594,
    end: 550.6359,
  },
  {
    word: "are",
    start: 550.6359,
    end: 550.97595,
  },
  {
    word: "equal",
    start: 550.97595,
    end: 551.21594,
  },
  {
    word: "and",
    start: 551.21594,
    end: 551.39594,
  },
  {
    word: "bilateral",
    start: 551.39594,
    end: 551.8159,
  },
  {
    word: "plus",
    start: 551.8159,
    end: 552.11597,
  },
  {
    word: "two",
    start: 552.11597,
    end: 552.3759,
  },
  {
    word: "grade.",
    start: 552.3759,
    end: 553.27594,
  },
  {
    word: "Her",
    start: 555.3159,
    end: 555.6359,
  },
  {
    word: "cap",
    start: 555.6359,
    end: 555.85596,
  },
  {
    word: "refill",
    start: 555.85596,
    end: 556.21594,
  },
  {
    word: "on",
    start: 556.21594,
    end: 556.39594,
  },
  {
    word: "both",
    start: 556.39594,
    end: 556.6359,
  },
  {
    word: "extremities",
    start: 556.6359,
    end: 557.3159,
  },
  {
    word: "is",
    start: 557.3159,
    end: 557.77594,
  },
  {
    word: "less",
    start: 557.77594,
    end: 557.9959,
  },
  {
    word: "than",
    start: 557.9959,
    end: 558.1359,
  },
  {
    word: "three",
    start: 558.1359,
    end: 558.59595,
  },
  {
    word: "seconds.",
    start: 558.59595,
    end: 559.2959,
  },
  {
    word: "The",
    start: 564.1359,
    end: 564.2559,
  },
  {
    word: "Binsky",
    start: 564.2559,
    end: 564.59595,
  },
  {
    word: "reflex",
    start: 564.59595,
    end: 565.0559,
  },
  {
    word: "is",
    start: 565.0559,
    end: 565.47595,
  },
  {
    word: "present",
    start: 565.47595,
    end: 565.8159,
  },
  {
    word: "in",
    start: 565.8159,
    end: 566.53595,
  },
  {
    word: "the",
    start: 566.53595,
    end: 567.21594,
  },
  {
    word: "left",
    start: 567.21594,
    end: 567.27594,
  },
  {
    word: "leg.",
    start: 567.27594,
    end: 567.2959,
  },
  {
    word: "The",
    start: 569.5559,
    end: 569.7559,
  },
  {
    word: "Binsky",
    start: 569.7559,
    end: 570.09595,
  },
  {
    word: "reflex",
    start: 570.09595,
    end: 570.65594,
  },
  {
    word: "is",
    start: 570.65594,
    end: 570.89594,
  },
  {
    word: "present",
    start: 570.89594,
    end: 571.1959,
  },
  {
    word: "in",
    start: 571.1959,
    end: 571.39594,
  },
  {
    word: "the",
    start: 571.39594,
    end: 571.53595,
  },
  {
    word: "right",
    start: 571.53595,
    end: 571.7559,
  },
  {
    word: "leg.",
    start: 571.7559,
    end: 573.27594,
  },
  {
    word: "And",
    start: 572.2959,
    end: 573.35596,
  },
  {
    word: "then",
    start: 573.35596,
    end: 573.59595,
  },
  {
    word: "I",
    start: 573.59595,
    end: 574.33594,
  },
  {
    word: "will",
    start: 574.33594,
    end: 574.73596,
  },
  {
    word: "have",
    start: 574.73596,
    end: 575.09595,
  },
  {
    word: "you",
    start: 575.09595,
    end: 575.5159,
  },
  {
    word: "stand",
    start: 575.5159,
    end: 576.23596,
  },
  {
    word: "with",
    start: 576.23596,
    end: 580.23596,
  },
  {
    word: "your",
    start: 580.23596,
    end: 580.5159,
  },
  {
    word: "feet",
    start: 580.5159,
    end: 580.71594,
  },
  {
    word: "together",
    start: 580.71594,
    end: 581.0759,
  },
  {
    word: "and",
    start: 581.0759,
    end: 581.27594,
  },
  {
    word: "your",
    start: 581.27594,
    end: 581.45593,
  },
  {
    word: "hands",
    start: 581.45593,
    end: 581.65594,
  },
  {
    word: "to",
    start: 581.65594,
    end: 581.7959,
  },
  {
    word: "your",
    start: 581.7959,
    end: 581.91595,
  },
  {
    word: "side.",
    start: 581.91595,
    end: 583.0759,
  },
  {
    word: "And",
    start: 582.2959,
    end: 583.23596,
  },
  {
    word: "then",
    start: 583.23596,
    end: 583.39594,
  },
  {
    word: "close",
    start: 583.39594,
    end: 583.6359,
  },
  {
    word: "your",
    start: 583.6359,
    end: 583.83594,
  },
  {
    word: "eyes",
    start: 583.83594,
    end: 584.3159,
  },
  {
    word: "and",
    start: 584.3159,
    end: 584.83594,
  },
  {
    word: "lift",
    start: 584.83594,
    end: 584.97595,
  },
  {
    word: "your",
    start: 584.97595,
    end: 585.11597,
  },
  {
    word: "left",
    start: 585.11597,
    end: 585.3159,
  },
  {
    word: "leg.",
    start: 585.3159,
    end: 587.23596,
  },
  {
    word: "Okay,",
    start: 587.2559,
    end: 587.45593,
  },
  {
    word: "the",
    start: 587.45593,
    end: 587.65594,
  },
  {
    word: "patient",
    start: 587.65594,
    end: 587.89594,
  },
  {
    word: "has",
    start: 587.89594,
    end: 588.5159,
  },
  {
    word: "a",
    start: 588.5159,
    end: 588.7959,
  },
  {
    word: "propriobalance",
    start: 588.7959,
    end: 589.33594,
  },
  {
    word: "and",
    start: 589.33594,
    end: 590.0759,
  },
  {
    word: "then",
    start: 590.0759,
    end: 590.27594,
  },
  {
    word: "I'll",
    start: 590.27594,
    end: 590.35596,
  },
  {
    word: "have",
    start: 590.35596,
    end: 590.53595,
  },
  {
    word: "you",
    start: 590.53595,
    end: 590.6759,
  },
  {
    word: "walk",
    start: 590.6759,
    end: 590.91595,
  },
  {
    word: "from",
    start: 590.91595,
    end: 591.1359,
  },
  {
    word: "here",
    start: 591.1359,
    end: 591.53595,
  },
  {
    word: "to",
    start: 591.53595,
    end: 592.0759,
  },
  {
    word: "the",
    start: 592.0759,
    end: 592.59595,
  },
  {
    word: "cabinet.",
    start: 592.59595,
    end: 593.6959,
  },
  {
    word: "Good,",
    start: 597.1359,
    end: 597.4359,
  },
  {
    word: "and",
    start: 597.4359,
    end: 597.59595,
  },
  {
    word: "then",
    start: 597.59595,
    end: 597.71594,
  },
  {
    word: "you",
    start: 597.71594,
    end: 597.83594,
  },
  {
    word: "can",
    start: 597.83594,
    end: 597.95593,
  },
  {
    word: "walk",
    start: 597.95593,
    end: 598.11597,
  },
  {
    word: "back.",
    start: 598.11597,
    end: 598.39594,
  },
  {
    word: "The",
    start: 599.5559,
    end: 599.71594,
  },
  {
    word: "patient",
    start: 599.71594,
    end: 599.95593,
  },
  {
    word: "has",
    start: 599.95593,
    end: 600.1759,
  },
  {
    word: "steady",
    start: 600.1759,
    end: 600.47595,
  },
  {
    word: "gait",
    start: 600.47595,
    end: 600.77594,
  },
  {
    word: "and",
    start: 600.77594,
    end: 601.5559,
  },
  {
    word: "you",
    start: 601.5559,
    end: 601.65594,
  },
  {
    word: "can",
    start: 601.65594,
    end: 601.7959,
  },
  {
    word: "sit",
    start: 601.7959,
    end: 601.91595,
  },
  {
    word: "back",
    start: 601.91595,
    end: 602.0559,
  },
  {
    word: "down.",
    start: 602.0559,
    end: 602.3159,
  },
  {
    word: "She",
    start: 607.09595,
    end: 607.2559,
  },
  {
    word: "has",
    start: 607.2559,
    end: 607.4959,
  },
  {
    word: "no",
    start: 607.4959,
    end: 607.85596,
  },
  {
    word: "edema",
    start: 607.85596,
    end: 608.21594,
  },
  {
    word: "present",
    start: 608.21594,
    end: 608.59595,
  },
  {
    word: "in",
    start: 608.59595,
    end: 608.8759,
  },
  {
    word: "her",
    start: 608.8759,
    end: 609.0559,
  },
  {
    word: "limbs,",
    start: 609.0559,
    end: 609.45593,
  },
  {
    word: "her",
    start: 609.45593,
    end: 610.03595,
  },
  {
    word: "ankles,",
    start: 610.03595,
    end: 610.5159,
  },
  {
    word: "or",
    start: 610.5159,
    end: 610.5759,
  },
  {
    word: "her",
    start: 610.5759,
    end: 610.71594,
  },
  {
    word: "feet.",
    start: 610.71594,
    end: 611.0159,
  },
  {
    word: "And",
    start: 612.1959,
    end: 612.61597,
  },
  {
    word: "this",
    start: 612.61597,
    end: 612.89594,
  },
  {
    word: "concludes",
    start: 612.89594,
    end: 613.4359,
  },
  {
    word: "my",
    start: 613.4359,
    end: 613.91595,
  },
  {
    word: "head-to-toe",
    start: 613.91595,
    end: 614.41595,
  },
  {
    word: "assessment.",
    start: 614.41595,
    end: 614.71594,
  },
];

export default testTranscript;

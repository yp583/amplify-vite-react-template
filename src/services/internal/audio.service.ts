import testAudio from "../../assets/testAudio.mp3";
import testTranscript from "../../testData/transcript.ts";
import { AltrixAudio, TranscriptSegment } from "../../AltrixDataModels";

export const getAltrixAudio = (): AltrixAudio => {
  return {
    id: 0,
    patientID: "0",
    s3_key: testAudio,
    transcript: testTranscript.map(
      (item, index): TranscriptSegment => ({
        ...item,
        id: index,
      }),
    ),
    transcriptName: "TestTranscript",
    createdAt: new Date(),
  };
};

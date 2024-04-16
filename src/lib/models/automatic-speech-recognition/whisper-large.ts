import { AutomaticSpeechRecognitionBaseModel } from "@/lib/models/base";
import { IClientConfig } from "@/lib/types/common/client-config";

export class WhisperLarge extends AutomaticSpeechRecognitionBaseModel {
  public static readonly endpoint =
    "https://api.deepinfra.com/v1/inference/openai/whisper-large";

  constructor(authToken: string, config?: Partial<IClientConfig>) {
    super(WhisperLarge.endpoint, authToken, config);
  }
}

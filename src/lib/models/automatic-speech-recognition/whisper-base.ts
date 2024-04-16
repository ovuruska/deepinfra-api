import {AutomaticSpeechRecognitionBaseModel} from '@/lib/models/base';
import {ClientConfig} from "@/lib/types/common/client-config";


export class WhisperBase extends AutomaticSpeechRecognitionBaseModel {
  public static readonly endpoint = 'https://api.deepinfra.com/v1/inference/openai/whisper-base';

  constructor(authToken: string, config?: ClientConfig) {
    super(WhisperBase.endpoint, authToken, config);
  }
}

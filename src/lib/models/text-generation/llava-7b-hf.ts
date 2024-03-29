import {TextGenerationBaseModel} from '@/lib/models/base/text-generation';


export class LlavaHF extends TextGenerationBaseModel {
  public static endpoint: string = 'https://api.deepinfra.com/v1/inference/llava-hf/llava-1.5-7b-hf';

  constructor(authToken: string) {
    super(LlavaHF.endpoint, authToken);
  }
}


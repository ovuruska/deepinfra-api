import {TextGenerationBaseModel} from '@/lib/models/base/text-generation';

export class Mixtral extends TextGenerationBaseModel {
  public static endpoint: string = 'https://api.deepinfra.com/v1/inference/mistralai/Mixtral-8x7B-Instruct-v0.1';

  constructor(authToken: string) {
    super(Mixtral.endpoint, authToken);
  }
}

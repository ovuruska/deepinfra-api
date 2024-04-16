import {TextEmbeddingBaseModel} from '@/lib/models/base';
import {ClientConfig} from "@/lib/types/common/client-config";


export class AllMiniLmL12V2 extends TextEmbeddingBaseModel {
  public static readonly endpoint: string = 'https://api.deepinfra.com/v1/inference/sentence-transformers/all-MiniLM-L12-v2';
  constructor(authToken: string, config?: ClientConfig) {
    super(AllMiniLmL12V2.endpoint, authToken, config);
  }
}

import {TextEmbeddingBaseModel} from '@/lib/models/base';


export class ClipVitB32MultiLingualV1 extends TextEmbeddingBaseModel {
  static endpoint: string = 'https://api.deepinfra.com/v1/inference/sentence-transformers/clip-ViT-B-32-multilingual-v1';

  constructor(authToken: string) {
    super(ClipVitB32MultiLingualV1.endpoint, authToken);
  }
}
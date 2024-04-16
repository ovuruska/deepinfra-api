import { TextEmbeddingBaseModel } from "@/lib/models/base";
import { IClientConfig } from "@/lib/types/common/client-config";

export class AllMiniLmL6V2 extends TextEmbeddingBaseModel {
  public static readonly endpoint: string =
    "https://api.deepinfra.com/v1/inference/sentence-transformers/all-MiniLM-L6-v2";
  constructor(authToken: string, config?: Partial<IClientConfig>) {
    super(AllMiniLmL6V2.endpoint, authToken, config);
  }
}

import {TextGenerationBaseModel} from '@/lib/models/base';
import {ClientConfig} from "@/lib/types/common/client-config";


export class CodeLlama_70B_Instruct_HF extends TextGenerationBaseModel {
  public static readonly endpoint: string = 'https://api.deepinfra.com/v1/inference/codellama/CodeLlama-70b-Instruct-hf';
  constructor(authToken: string, config?: ClientConfig) {
    super(CodeLlama_70B_Instruct_HF.endpoint, authToken, config);
  }
}

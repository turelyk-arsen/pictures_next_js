import { ModelInit, MutableModel, __modelMeta__, ManagedIdentifier } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";





type EagerPOST = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<POST, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly body?: string | null;
  readonly image?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPOST = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<POST, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly title?: string | null;
  readonly body?: string | null;
  readonly image?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type POST = LazyLoading extends LazyLoadingDisabled ? EagerPOST : LazyPOST

export declare const POST: (new (init: ModelInit<POST>) => POST) & {
  copyOf(source: POST, mutator: (draft: MutableModel<POST>) => MutableModel<POST> | void): POST;
}
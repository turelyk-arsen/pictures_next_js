/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type POSTCreateFormInputValues = {
    title?: string;
    body?: string;
    image?: string[];
};
export declare type POSTCreateFormValidationValues = {
    title?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type POSTCreateFormOverridesProps = {
    POSTCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type POSTCreateFormProps = React.PropsWithChildren<{
    overrides?: POSTCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: POSTCreateFormInputValues) => POSTCreateFormInputValues;
    onSuccess?: (fields: POSTCreateFormInputValues) => void;
    onError?: (fields: POSTCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: POSTCreateFormInputValues) => POSTCreateFormInputValues;
    onValidate?: POSTCreateFormValidationValues;
} & React.CSSProperties>;
export default function POSTCreateForm(props: POSTCreateFormProps): React.ReactElement;

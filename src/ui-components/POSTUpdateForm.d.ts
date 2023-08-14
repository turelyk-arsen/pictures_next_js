/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StorageManagerProps } from "@aws-amplify/ui-react-storage";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { POST } from "../models";
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type POSTUpdateFormInputValues = {
    title?: string;
    body?: string;
    image?: string[];
};
export declare type POSTUpdateFormValidationValues = {
    title?: ValidationFunction<string>;
    body?: ValidationFunction<string>;
    image?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type POSTUpdateFormOverridesProps = {
    POSTUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    title?: PrimitiveOverrideProps<TextFieldProps>;
    body?: PrimitiveOverrideProps<TextFieldProps>;
    image?: PrimitiveOverrideProps<StorageManagerProps>;
} & EscapeHatchProps;
export declare type POSTUpdateFormProps = React.PropsWithChildren<{
    overrides?: POSTUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    pOST?: POST;
    onSubmit?: (fields: POSTUpdateFormInputValues) => POSTUpdateFormInputValues;
    onSuccess?: (fields: POSTUpdateFormInputValues) => void;
    onError?: (fields: POSTUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: POSTUpdateFormInputValues) => POSTUpdateFormInputValues;
    onValidate?: POSTUpdateFormValidationValues;
} & React.CSSProperties>;
export default function POSTUpdateForm(props: POSTUpdateFormProps): React.ReactElement;

import * as React from "react";

import { fromEvent } from "file-selector";

export type FilePickerReturnTypes = [File[], () => void];

export interface ImageDims {
  minImageWidth?: number;
  maxImageWidth?: number;
  minImageHeight?: number;
  maxImageHeight?: number;
}

export interface UseFilePickerConfig {
  multiple?: boolean;
  accept?: string | string[];
}

function useFilePicker({
  accept = "*",
  multiple = true,
}: UseFilePickerConfig): FilePickerReturnTypes {
  const [files, setFiles] = React.useState<File[]>([]);
  const openFileSelector = accept instanceof Array ? accept.join(",") : accept;
  openFileDialog(fileExtensions, multiple, (evt) => {
    fromEvent(evt).then((files) => {
      setFiles(files.map((file) => file as File) as File[]);
    });
  });
  return [files, openFileDialog];
}

export default useFilePicker;

const openFileDialog = (
  accept: string,
  multiple: boolean,
  callback: (ary: any) => void
) => {
  var inputElement = document.createElement("input");
  inputElement.type = "file";
  inputElement.accept = accept;
  inputElement.multiple = multiple;
  inputElement.addEventListener("change", callback);
  inputElement.dispatchEvent(new MouseEvent("click"));
};

const BYTES_PER_MEGABYTE = 100000;

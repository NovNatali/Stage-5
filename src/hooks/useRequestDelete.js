import { useState } from "react";

export const useRequestDelete = (refreshTask) => {
export const useRequestDelete = (/*refreshTask*/) => {
  const [isDeleting, setIsDeleting] = useState(false);

  const requestDelete = (taskId) => {
@@ -11,7 +11,7 @@ export const useRequestDelete = (refreshTask) => {
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        refreshTask();
        // refreshTask();
        console.log("Задача удалена, ответ сервера: ", response);
      })
      .finally(() => setIsDeleting(false));
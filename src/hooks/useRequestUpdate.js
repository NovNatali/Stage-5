import { useState } from "react";

export const useRequestUpdate = (refreshTask) => {
export const useRequestUpdate = (/*refreshTask*/) => {
  const [isUpdating, setIsUpdating] = useState(false);

  const requestUpdate = (taskId, taskName) => {
@@ -15,7 +15,7 @@ export const useRequestUpdate = (refreshTask) => {
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        refreshTask();
        // refreshTask();
        console.log("Задача обновлена, ответ сервера: ", response);
      })
      .finally(() => setIsUpdating(false));
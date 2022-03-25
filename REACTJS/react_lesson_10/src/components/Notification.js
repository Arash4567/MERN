import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function error(value) {
  iziToast.error({
    title: "Iltimos,",
    message: `${value}ni kiriting!`,
    position: "topRight",
  });
}

export function errorGet(value) {
  iziToast.error({
    title: "Xatolik:",
    message: `${value}`,
    position: "topRight",
  });
}
export function success() {
  iziToast.success({
    title: "Post,",
    message: "muvafaqiyatli qo`shildi!",
    position: "topRight",
  });
}

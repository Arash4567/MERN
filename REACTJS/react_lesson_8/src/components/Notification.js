import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export function error(value) {
  iziToast.error({
    title: "Iltimos,",
    message: `${value}ni kiriting!`,
    position: "topRight",
  });
}
export function success() {
  iziToast.success({
    title: "Friend,",
    message: "muvafaqiyatli qo`shildi!",
    position: "topRight",
  });
}

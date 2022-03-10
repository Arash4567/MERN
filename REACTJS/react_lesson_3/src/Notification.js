import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'

function Notification(){
    function success() {
        iziToast.success({
            title: 'OK',
            message: 'Successfully inserted record!',
            position: 'topRight'
        });
    }
    function error() {
        iziToast.error({
            title: 'OK',
            message: 'Successfully inserted record!',
            position: 'topRight'
        });
    }
    function info() {
        iziToast.info({
            title: 'OK',
            message: 'Successfully inserted record!',
            position: 'topRight'
        });
    }
    function warning() {
        iziToast.warning({
            title: 'OK',
            message: 'Successfully inserted record!',
            position: 'topRight'
        });
    }
    return (
        <>
            <button className="btn btn-success" onClick={() => success()}>Show me!</button>
            <button className="btn btn-danger ms-2" onClick={() => error()}>Show me!</button>
            <button className="btn btn-info ms-2" onClick={() => info()}>Show me!</button>
            <button className="btn btn-warning ms-2" onClick={() => warning()}>Show me!</button>
        </>
    )
}

export default Notification;
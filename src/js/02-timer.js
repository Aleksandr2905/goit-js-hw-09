import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";

const refs = {
    dataInputEl: document.querySelector('#datetime-picker'),
    startBtnEl: document.querySelector('[data-start]'),
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
}

flatpickr(refs.dataInputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const diffData = selectedDates[0] - Date.now();
        if (diffData <= 0) {
            alert('Please choose a date in the future');
            refs.startBtnEl.disabled = true;
            return;
            
        }
        refs.startBtnEl.disabled = false;
    console.log(selectedDates[0]);
  },
});


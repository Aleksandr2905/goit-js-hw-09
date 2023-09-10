import flatpickr from "flatpickr";
import "flatpickr/dist/flatpickr.min.css";
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { Report } from 'notiflix/build/notiflix-report-aio';


const dataInputEl = document.querySelector('#datetime-picker');
const startBtnEl = document.querySelector('[data-start]');    


flatpickr (dataInputEl, {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
        const diffData = selectedDates[0] - Date.now();
        if (diffData <= 0) {
          Notify.failure('Please choose a date in the future', {
            position: 'center-top',
            });
            startBtnEl.disabled = true;
            return;
            
        }
      startBtnEl.disabled = false;
      

      startBtnEl.addEventListener('click', event => {
        timer.deadline = selectedDates[0];

        timer.start();
      });      
      
    console.log(selectedDates[0]);
  },
});

const timer = {
  deadline: new Date(2023, 8, 5, 13),
  intervalId: null,
  refs: {
    dataDays: document.querySelector('[data-days]'),
    dataHours: document.querySelector('[data-hours]'),
    dataMinutes: document.querySelector('[data-minutes]'),
    dataSeconds: document.querySelector('[data-seconds]'),
  },

  start() {
    this.intervalId = setInterval(() => {
      const ms = this.deadline - Date.now();

      if (ms <= 0) {
        Report.failure(
        'DEADLINE IS OVER',
        '',
        'Ok',
        );
        this.stop();

        return;
      }

      let { days, hours, minutes, seconds } = this.convertMs(ms);

      this.refs.dataDays.textContent = this.addLeadingZero(days);
      this.refs.dataHours.textContent = this.addLeadingZero(hours);
      this.refs.dataMinutes.textContent = this.addLeadingZero(minutes);
      this.refs.dataSeconds.textContent = this.addLeadingZero(seconds);      
    }, 1000);
  },

  stop() {
    clearInterval(this.intervalId);
  },

  addLeadingZero(value) {
    return String(value).padStart(2, '0');
  },

  convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
  }



};



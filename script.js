// script.js

document.addEventListener('DOMContentLoaded', function () {
    const monthYearElement = document.getElementById('month-year');
    const calendarDaysElement = document.getElementById('calendar-days');
    const prevMonthButton = document.getElementById('prev-month');
    const nextMonthButton = document.getElementById('next-month');

    let currentYear = new Date().getFullYear();
    let currentMonth = new Date().getMonth();

    function renderCalendar(year, month) {
        // Define o primeiro e último dia do mês
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        
        // Define o dia da semana do primeiro dia e o número total de dias no mês
        const firstDayWeekday = firstDay.getDay();
        const totalDays = lastDay.getDate();

        // Define o título do mês e ano
        monthYearElement.textContent = `${firstDay.toLocaleString('default', { month: 'long' })} ${year}`;

        // Limpa o conteúdo anterior
        calendarDaysElement.innerHTML = '';

        // Preenche o calendário com dias em branco antes do início do mês
        for (let i = 0; i < firstDayWeekday; i++) {
            const emptyDay = document.createElement('div');
            emptyDay.className = 'calendar-day';
            calendarDaysElement.appendChild(emptyDay);
        }

        // Adiciona os dias do mês
        for (let day = 1; day <= totalDays; day++) {
            const dayElement = document.createElement('div');
            dayElement.className = 'calendar-day';
            dayElement.textContent = day;
            calendarDaysElement.appendChild(dayElement);
        }
    }

    function handlePrevMonth() {
        if (currentMonth === 0) {
            currentMonth = 11;
            currentYear--;
        } else {
            currentMonth--;
        }
        renderCalendar(currentYear, currentMonth);
    }

    function handleNextMonth() {
        if (currentMonth === 11) {
            currentMonth = 0;
            currentYear++;
        } else {
            currentMonth++;
        }
        renderCalendar(currentYear, currentMonth);
    }

    // Adiciona eventos de clique aos botões
    prevMonthButton.addEventListener('click', handlePrevMonth);
    nextMonthButton.addEventListener('click', handleNextMonth);

    // Renderiza o calendário inicial
    renderCalendar(currentYear, currentMonth);
});

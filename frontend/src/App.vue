<template>

  <h1>Učebna 17 - Rozvrh a Počítače</h1>

  <div class="container">

    </div>

    



    <!-- Rozvrh -->
    <div class="room-section">
      <div class="room-title">📅 Rozvrh hodin - učebna 17</div>
      <table>
        <thead>
          <tr>
            <th>Den</th>
            <th>8:15 - 9:00</th>
            <th>9:10 - 9:55</th>
            <th>10:15 - 11:00</th>
            <th>11:05 - 11:50</th>
            <th>11:55 - 12:40</th>
            <th>12:45 - 13:30</th>
            <th>13:45 - 14:30</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Pondělí</td>
            <td class="subject">Programování</td>
            <td class="subject">WWW</td>
            <td class="empty">Volno</td>
            <td class="subject">Kybernetika</td>
            <td class="empty">Volno</td>
            <td class="subject">IT právo</td>
            <td class="empty">Volno</td>
          </tr>
          <tr>
            <td>Úterý</td>
            <td class="empty">Volno</td>
            <td class="subject">Kybernetika</td>
            <td class="subject">Počítačové sítě</td>
            <td class="empty">Volno</td>
            <td class="subject">Informatika</td>
            <td class="empty">Volno</td>
            <td class="subject">IT právo</td>
          </tr>
          <tr>
            <td>Středa</td>
            <td class="subject">Programování</td>
            <td class="empty">Volno</td>
            <td class="subject">Kybernetika</td>
            <td class="subject">WWW</td>
            <td class="empty">Volno</td>
            <td class="subject">Informatika</td>
            <td class="empty">Volno</td>
          </tr>
          <tr>
            <td>Čtvrtek</td>
            <td class="subject">Programování</td>
            <td class="subject">Algoritmy</td>
            <td class="empty">Volno</td>
            <td class="subject">Sítě</td>
            <td class="empty">Volno</td>
            <td class="subject">Matematika</td>
            <td class="empty">Volno</td>
          </tr>
          <tr>
            <td>Pátek</td>
            <td class="subject">Informatika</td>
            <td class="subject">Týmový projekt</td>
            <td class="empty">Volno</td>
            <td class="subject">Týmový projekt</td>
            <td class="empty">Volno</td>
            <td class="subject">Kreativní programování</td>
            <td class="empty">Volno</td>
          </tr>
        </tbody>
      </table>
    </div>




</template>


<style>
body {
  margin: 0;
  padding: 0;
  background: #1f1f1f;
  color: #e0e0e0;
  font-family: 'Segoe UI', sans-serif;
}

h1 {
  text-align: center;
  padding: 30px;
  font-size: 2.5rem;
  color: #58a6ff;
  text-shadow: 0 0 20px #58a6ff;
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 20px;
}

.computer-bar {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
  padding: 20px;
  margin-bottom: 40px;
  background: #2d2d2d;
  border-radius: 12px;
  box-shadow: inset 0 0 10px #3e3e3e;
}

.computer {
  width: 100px;
  height: 60px;
  background: linear-gradient(145deg, #1f6feb, #3b82f6);
  color: white;
  border: none;
  border-radius: 10px;
  box-shadow: 0 0 12px #1f6feb;
  font-weight: bold;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.2s ease;
}

.computer:hover {
  box-shadow: 0 0 20px #60a5fa;
  transform: scale(1.05);
}

.computer.called {
  background: #facc15;
  color: #111;
  box-shadow: 0 0 12px #facc15;
  cursor: not-allowed;
}

.room-section {
  background: #2d2d2d;
  padding: 30px;
  border-radius: 12px;
  box-shadow: 0 0 20px #58a6ff40;
}

.room-title {
  font-size: 1.8rem;
  margin-bottom: 20px;
  color: #79c0ff;
  border-bottom: 2px solid #444;
  padding-bottom: 10px;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  padding: 14px;
  text-align: center;
  border: 1px solid #444;
}

th {
  background-color: #58a6ff;
  color: white;
  font-weight: bold;
}

td {
  background-color: #1f1f1f;
}

tr:nth-child(even) td {
  background-color: #2d2d2d;
}

.subject {
  background-color: #10b981;  /* zelená barva */
  color: #fff;
  font-weight: bold;
}

.empty {
  background-color: #444;
  color: #888;
  font-style: italic;
}

@media (max-width: 768px) {
  .computer {
    width: 80px;
    height: 50px;
    font-size: 0.8rem;
  }

  table {
    font-size: 0.9rem;
  }
}
</style>


import React from 'react'

import "../styles/StyleCalendarStudents.css";

export function CalendarioEstudiante() {
  return (


    <div className="mainCalendar">
      {/* Header */}
      <div className="diaCal mesCal">
        <h2>Feb</h2>
      </div>

      <div className="diaCal">
        <h2>23 Lu</h2>
      </div>
      <div className="diaCal">
        <h2>24 Ma</h2>
      </div>
      <div className="diaCal">
        <h2>25 Mi</h2>
      </div>
      <div className="diaCal">
        <h2>26 Ju</h2>
      </div>
      <div className="diaCal">
        <h2>27 Vi</h2>
      </div>

      {/* Fila Mat 1 */}
      <div className="matCal">
        <h2>Mat 1</h2>
      </div>
      <div className="cellCal"></div>
      <div className="cellCal"></div>
      <div className="cellCal"></div>
      <div className="cellCal"></div>
      <div className="cellCal"></div>

      {/* Fila Mat 2 */}
      <div className="matCal">
        <h2>Mat 2</h2>
      </div>
      <div className="cellCal"></div>
      <div className="cellCal"></div>
      <div className="cellCal"></div>
      <div className="cellCal"></div>
      <div className="cellCal"></div>

      {/* Fila Mat 3 */}
      <div className="matCal">
        <h2>Mat 3</h2>
      </div>
      <div className="cellCal"></div>
      <div className="cellCal"></div>
      <div className="cellCal"></div>
      <div className="cellCal"></div>
      <div className="cellCal"></div>
    </div>
    


  )
}


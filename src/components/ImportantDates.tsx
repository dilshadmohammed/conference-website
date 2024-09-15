import importantDatesData from '../content/importanDates.json'; // Import the JSON file

function ImportantDates() {
  return (
    <div className="flex justify-center mt-8">
      <ul className="timeline timeline-vertical">
        {importantDatesData.map((dateInfo, index) => (
          <li key={index}>
            <hr />
            {dateInfo.side === "right" ? (
              <div className={`timeline-start timeline-box p-4 bg-gray-100 rounded-md shadow-md border-r-4`} style={{ borderColor: dateInfo.borderColor }}>
                <h3 className={`text-xl font-semibold text-${dateInfo.textColor}`}>{dateInfo.date}</h3>
                <p className="text-sm text-gray-600">{dateInfo.event}</p>
              </div>
            ) : (
              <div className={`timeline-end timeline-box p-4 bg-gray-100 rounded-md shadow-md border-l-4 `} style={{ borderColor: dateInfo.borderColor }}>
                <h3 className={`text-xl font-semibold text-${dateInfo.textColor}`}>{dateInfo.date}</h3>
                <p className="text-sm text-gray-600">{dateInfo.event}</p>
              </div>
            )}
            
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ImportantDates;

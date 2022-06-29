const insights_data = [
  {
    icon: '"bi bi-graph-up"',
    insight_name: "Total sales",
    value: "797,508",
    percent: "81%",
  },
  {
    icon: '"bi bi-bar-chart"',
    insight_name: "Expenses",
    value: "$56,797",
    percent: "86%",
    progress: "",
    last_seen: "6 Hours",
  },
  {
    icon: '"bi bi-activity"',
    insight_name: "Income",
    value: "$45,797,508",
    percent: "81%",
    progress: "",
    last_seen: "10 Hours",
  },
];
const insights_container = document.getElementsByClassName("insights")[0];

insights_container.innerHTML = insights_data
  .map((data) => {
    let { icon, insight_name, value, percent, progress, last_seen } = data;
    return `
    <div>
    <span class="icons"><i class=${icon}></i></span>
    <div class="middle">
      <div class="left">
        <h3>${insight_name}</h3>
        <h1>${value}</h1>
      </div>
      <div class="progress">
        <svg>
          <circle cx="38" cy="38" r="36"></circle>
        </svg>

      </div>
    </div>
    
     </div>
    `;
  })
  .join("");

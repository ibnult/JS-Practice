function getPendingTasks(tasks, currentTime) {
  if (!Array.isArray(tasks) || typeof currentTime !== "string") {
    return "Invalid";
  }

  const currentMinutes = toMinutes(currentTime);
  if (currentMinutes === null) return "Invalid";

  const result = [];

  for (const task of tasks) {
    if (
      !task ||
      typeof task.task !== "string" ||
      typeof task.time !== "string"
    ) {
      return "Invalid";
    }

    const taskMinutes = toMinutes(task.time);
    if (taskMinutes === null) return "Invalid";

    if (taskMinutes > currentMinutes) {
      result.push(task);
    }
  }

  return result;
}

function toMinutes(timeStr) {
  const [hh, mm] = timeStr.split(":").map(Number);
  if (
    isNaN(hh) ||
    isNaN(mm) ||
    hh < 0 ||
    hh > 23 ||
    mm < 0 ||
    mm > 59
  ) {
    return null;
  }
  return hh * 60 + mm;
}

const todayTasks = [
  { task: "Fajr Prayer", time: "04:30" },
  { task: "Meeting", time: "09:00" },
  { task: "Lunch", time: "13:00" },
  { task: "Asr Prayer", time: "16:00" }
];

const now = "08:30";

console.log(getPendingTasks(todayTasks, now));

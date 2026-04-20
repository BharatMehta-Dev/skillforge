// ================= AI SKILL ANALYZER =================
async function analyzeSkill() {
  const skillInput = document.getElementById("skillInput");
  const resultBox = document.getElementById("result");

  const skill = skillInput.value.trim();

  if (!skill) {
    resultBox.innerText = "Please enter a skill.";
    return;
  }

  resultBox.style.display = 'block';
  resultBox.innerText = "Analyzing...";

  try {
    const res = await fetch("https://skillforge-api-d0wm.onrender.com/analyze-skill", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ skill })
    });

    const data = await res.json();

    if (data.error) {
      resultBox.innerText = "Error: " + data.error;
    } else {
      resultBox.innerHTML = marked.parse(data.result);
    }

  } catch (err) {
    resultBox.innerText = "Server not responding.";
  }
}


// ================= AI GAP ANALYZER =================
async function analyzeGap() {
  const currentInput = document.getElementById("currentSkills");
  const targetInput = document.getElementById("targetSkills");
  const resultBox = document.getElementById("gapResult");

  const current = currentInput.value.trim();
  const target = targetInput.value.trim();

  if (!current || !target) {
    resultBox.innerText = "Please enter both current and target skills.";
    return;
  }

  resultBox.style.display = 'block';
  resultBox.innerText = "Analyzing gap...";

  try {
    const res = await fetch("https://skillforge-api-d0wm.onrender.com/analyze-gap", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ current, target })
    });

    const data = await res.json();

    if (data.error) {
      resultBox.innerText = "Error: " + data.error;
    } else {
      resultBox.innerHTML = marked.parse(data.result);
    }

  } catch (err) {
    resultBox.innerText = "Server not responding.";
  }
}

// ================= AI PLANNER =================
async function generatePlan(skill) {
  try {
    const res = await fetch("https://skillforge-api-d0wm.onrender.com/generate-plan", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ skill })
    });

    const data = await res.json();

    if (data.error) {
      throw new Error(data.error);
    }

    return data.result;

  } catch (err) {
    console.error(err);
    throw err;
  }
}
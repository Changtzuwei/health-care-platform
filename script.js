function showGuide(type) {
  const guideBox = document.getElementById("guideBox");
  let content = "";

  if (type === "wound") {
    content = `
      <h2>突發傷口處置</h2>
      <div class="step"><button onclick="toggleSection('w1')">一、傷口緊急處理步驟 ⬇️</button>
        <div id="w1" style="display:none;">
          <div class="step">🧼 <b>洗手</b>：用肥皂或洗手乳徹底清潔雙手。</div>
          <div class="step">🩸 <b>止血</b>：用紗布加壓止血，並抬高患部。</div>
          <div class="step">💧 <b>清潔</b>：用生理食鹽水或冷開水沖洗傷口。</div>
          <div class="step">🧴 <b>消毒</b>：由傷口中心向外環狀消毒。</div>
          <div class="step">🔄 <b>再次清潔</b>：30秒後用生理食鹽水擦掉優碘。</div>
          <div class="step">🩹 <b>覆蓋</b>：用無菌紗布覆蓋並固定。</div>
        </div>
      </div>

      <div class="step"><button onclick="toggleSection('w2')">二、傷口照護注意事項 ⬇️</button>
        <div id="w2" style="display:none;">
          <div class="step">💨 保持乾燥，避免碰水。</div>
          <div class="step">🔁 每天至少換藥一次，濕掉立即更換。</div>
          <div class="step">❄️ 24-48小時內可冰敷，每次不超過20分鐘。</div>
          <div class="step">🚫 不要自行撕除結痂。</div>
        </div>
      </div>

      <div class="step"><button onclick="toggleSection('w3')">三、感染警訊 ⚠️ ⬇️</button>
        <div id="w3" style="display:none;">
          <div class="step warning">🚨 傷口紅、腫、熱、痛加劇</div>
          <div class="step warning">🚨 出現異味、膿或滲出液增加</div>
          <div class="step warning">🚨 發燒或劇烈疼痛</div>
        </div>
      </div>

      <div class="step"><button onclick="toggleSection('w4')">四、促進癒合 ⬇️</button>
        <div id="w4" style="display:none;">
          <div class="step">🥩 蛋白質：牛奶、雞蛋、瘦肉</div>
          <div class="step">🍊 維生素C：芭樂、奇異果、柑橘</div>
          <div class="step">🩹 人工皮可保持濕潤平衡，幫助癒合。</div>
        </div>
      </div>
    `;
  }

  if (type === "muscle") {
    content = `
      <h2>身體痠痛</h2>
      <div class="step"><button onclick="toggleSection('m1')">一、基本舒緩方式 ⬇️</button>
        <div id="m1" style="display:none;">
          <div class="step">❄️ 冷敷：肌肉發熱或發炎時，冷敷15-20分鐘。</div>
          <div class="step">🔥 熱敷：非發炎時熱敷10分鐘。</div>
          <div class="step">💆 按摩：輕柔按摩10-15分鐘。</div>
          <div class="step">🧘 伸展：簡單伸展可減少痠痛。</div>
        </div>
      </div>

      <div class="step"><button onclick="toggleSection('m2')">二、日常保養 ⬇️</button>
        <div id="m2" style="display:none;">
          <div class="step">💧 多喝水，促進代謝。</div>
          <div class="step">🥩 補充蛋白質與營養。</div>
          <div class="step">😴 充分休息，避免過度運動。</div>
        </div>
      </div>

      <div class="step"><button onclick="toggleSection('m3')">三、常見藥物（非處方） ⬇️</button>
        <div id="m3" style="display:none;">
          <div class="step">💊 乙醯胺酚：止痛退燒，但無抗發炎效果。</div>
          <div class="step">💊 NSAIDs：可消炎止痛，但可能傷胃。</div>
          <div class="step warning">⚠️ 有肝病、胃潰瘍或服藥者，請先諮詢醫師。</div>
        </div>
      </div>
    `;
  }

  if (type === "allergy") {
    content = `
      <h2>過敏反應</h2>
      <div class="step"><button onclick="toggleSection('a1')">一、什麼是過敏病 ⬇️</button>
        <div id="a1" style="display:none;">
          <div class="step">📌 免疫系統對無害物質產生過度反應。</div>
          <div class="step">📌 可能造成發炎，影響身體功能。</div>
          <div class="step">📌 常見症狀：打噴嚏、流鼻水、皮膚癢。</div>
        </div>
      </div>

      <div class="step"><button onclick="toggleSection('a2')">二、過敏原 ⬇️</button>
        <div id="a2" style="display:none;">
          <div class="step"><b>📌 吸入性過敏原</b><ul><li>花粉</li><li>塵蟎</li><li>動物毛</li></ul></div>
          <div class="step"><b>📌 食物過敏原</b><ul><li>海鮮</li><li>牛奶</li><li>蛋</li></ul></div>
          <div class="step"><b>📌 接觸性過敏原</b><ul><li>化妝品</li><li>乳膠</li></ul></div>
        </div>
      </div>

      <div class="step"><button onclick="toggleSection('a5')">三、何時就醫 ⚠️</button>
        <div id="a5" style="display:none;">
          <div class="step warning">🚨 呼吸困難</div>
          <div class="step warning">🚨 嘴唇腫脹</div>
          <div class="step warning">🚨 意識不清</div>
        </div>
      </div>
    `;
  }

  if (type === "heart") {
    content = `
      <h2>疑似心梗 / 窒息</h2>
      <div class="step warning">🚨 心肌梗塞可能在 1 小時內致命，若疑似發作請立即撥打 119！</div>

      <div class="step"><button onclick="toggleSection('h1')">一、疑似心肌梗塞處置 ⬇️</button>
        <div id="h1" style="display:none;">
          <div class="step">📌 症狀：胸悶、胸痛、壓迫感、疼痛擴散至下巴、左臂或背部。</div>
          <div class="step">😰 可能伴隨呼吸困難、冒冷汗、噁心、暈眩。</div>
          <div class="step">📞 立即撥打 119，不要自行開車。</div>
        </div>
      </div>

      <div class="step"><button onclick="toggleSection('h2')">二、CPR 與 AED ⬇️</button>
        <div id="h2" style="display:none;">
          <div class="step warning">🚨 無意識且無呼吸時立即 CPR。</div>
          <div class="step">❤️ 壓胸位置：兩乳連線中點。</div>
          <div class="step">⏱ 速率：每分鐘 100-120 下。</div>
          <div class="step">⚡ 盡快使用 AED。</div>
        </div>
      </div>

      <div class="step"><button onclick="toggleSection('h3')">三、異物哽塞處置 ⬇️</button>
        <div id="h3" style="display:none;">
          <div class="step">🟡 輕度：可咳嗽或說話時，鼓勵咳嗽。</div>
          <div class="step">🔴 重度：無法說話時，立即執行哈姆立克法。</div>
        </div>
      </div>

      <div class="step"><button onclick="toggleSection('h6')">四、急救圖解 ⬇️</button>
        <div id="h6" style="display:none;">
          <div class="img-row">
            <div class="img-box">
              <img src="baby-heimlich.jpg" alt="嬰兒異物哽塞急救圖解">
              <p>嬰兒：五次拍背 + 五次胸部推壓</p>
            </div>
            <div class="img-box">
              <img src="adult-choking.jpg" alt="成人異物哽塞急救圖解">
              <p>成人：腹部推壓，必要時 CPR</p>
            </div>
          </div>
          <div class="step warning">圖片與部分內容截取於亞太新聞網。</div>
        </div>
      </div>
    `;
  }

  if (type === "disease") {
    content = `
      <h2>常見疾病總覽</h2>
      <div class="disease-category"><b>代謝與內分泌系統</b><br>糖尿病、高血脂、痛風、甲狀腺功能亢進、甲狀腺功能低下</div>
      <div class="disease-category"><b>心血管系統</b><br>高血壓、冠心病、心臟衰竭、動脈粥狀硬化</div>
      <div class="disease-category"><b>呼吸系統</b><br>COPD、哮喘</div>
      <div class="disease-category"><b>精神與心理疾病</b><br>憂鬱症、焦慮症、躁鬱症、思覺失調症</div>
    `;
  }

  if (type === "smart") {
    content = `
      <h2>智能症狀推薦</h2>
      <select id="symptomSelect">
        <option value="">請選擇症狀</option>
        <option value="unknown">無法區分之疾病</option>
        <option value="fever">發燒</option>
        <option value="fatigue">疲勞、疲倦</option>
        <option value="cold">感冒</option>
        <option value="headache">頭痛、頭暈</option>
        <option value="dizzy">眩暈（天旋地轉）</option>
        <option value="hypertension">高血壓</option>
        <option value="chestPain">胸痛</option>
        <option value="breath">氣促、喘不過氣</option>
        <option value="cough">咳嗽</option>
        <option value="throat">喉嚨痛、扁桃腺發炎</option>
        <option value="abdominalPain">腹痛</option>
        <option value="urine">血尿、頻尿、解尿困難</option>
        <option value="skinItch">皮膚癢</option>
        <option value="rash">皮膚疹</option>
        <option value="backPain">腰痛背痛</option>
        <option value="jointPain">關節酸痛</option>
        <option value="sleep">失眠（多眠）症</option>
        <option value="stress">壓力引起之身心不適</option>
      </select>
      <button onclick="recommendCare()">取得建議</button>
      <div id="recommendBox"></div>
    `;
  }

  if (type === "record") {
    content = `
      <h2>每日身體狀況紀錄</h2>
      <label>日期</label>
      <input type="text" id="recordDate" placeholder="2026-01-01">
      <label>體溫</label>
      <input type="number" id="temperature" placeholder="例如：36.8">
      <label>血壓</label>
      <input type="text" id="bloodPressure" placeholder="例如：120/80">
      <button onclick="saveRecord()">儲存</button>
      <h3>歷史紀錄</h3>
      <div id="recordList"></div>
    `;
    setTimeout(loadRecords, 0);
  }

  guideBox.innerHTML = content;
}

function recommendCare() {
  const val = document.getElementById("symptomSelect").value;
  const box = document.getElementById("recommendBox");

  const data = {
    unknown: {
      dept: "一般內科、家庭醫學科",
      care: "先記錄主要症狀、發生時間、體溫、血壓與疼痛位置。若症狀持續或不確定原因，建議就醫評估。"
    },
    fever: {
      dept: "一般內科、感染科、家庭醫學科、過敏免疫風濕科",
      care: "多喝水、充分休息、量體溫。若高燒不退、呼吸困難、意識不清，請立即就醫。"
    },
    fatigue: {
      dept: "一般內科、家庭醫學科",
      care: "保持睡眠、補充水分與均衡飲食。若長期疲倦、體重下降或頭暈，建議檢查。"
    },
    cold: {
      dept: "一般內科、家庭醫學科、耳鼻喉科",
      care: "多休息、多喝水，注意鼻塞、喉嚨痛與發燒情形。若症狀超過一週或惡化，建議就醫。"
    },
    headache: {
      dept: "一般內科、神經內科、家庭醫學科",
      care: "先休息、補充水分、避免熬夜。若劇烈頭痛、單側無力、說話不清，請立即就醫。"
    },
    dizzy: {
      dept: "耳鼻喉科、神經內科、家庭醫學科",
      care: "先坐下或躺下避免跌倒，避免突然轉頭。若伴隨胸痛、肢體無力或意識改變，立即就醫。"
    },
    hypertension: {
      dept: "一般內科、心臟內科、家庭醫學科",
      care: "規律量血壓、減少鹽分、避免熬夜與情緒緊張。若血壓非常高或胸痛頭痛，請就醫。"
    },
    chestPain: {
      dept: "心臟內科、胸腔內科、一般內科、家庭醫學科",
      care: "立即停止活動並休息。若胸悶、冒冷汗、呼吸困難或痛到左臂下巴，請立即撥打119。"
    },
    breath: {
      dept: "心臟內科、胸腔內科、一般內科、家庭醫學科",
      care: "保持坐姿、放鬆呼吸。若喘不過氣、嘴唇發紫、胸痛或意識不清，請立即撥打119。"
    },
    cough: {
      dept: "一般內科、胸腔內科、耳鼻喉科、家庭醫學科",
      care: "補充水分、避免菸味與刺激物。若咳嗽超過兩週、咳血、喘或發燒，請就醫。"
    },
    throat: {
      dept: "一般內科、耳鼻喉科、家庭醫學科",
      care: "多喝溫水、避免刺激食物、適度休息。若高燒、吞嚥困難或呼吸不順，請就醫。"
    },
    abdominalPain: {
      dept: "一般內科、胃腸科、一般外科、家庭醫學科、婦產科",
      care: "先休息、避免油膩刺激食物。若劇烈腹痛、吐血、黑便、發燒或持續惡化，請立即就醫。"
    },
    urine: {
      dept: "泌尿科、婦產科、腎臟科、家庭醫學科",
      care: "多喝水並觀察尿液顏色。若血尿、發燒、腰痛或解尿疼痛明顯，建議盡快就醫。"
    },
    skinItch: {
      dept: "皮膚科、一般內科、家庭醫學科",
      care: "避免抓癢、保持皮膚保濕，暫停可疑過敏物。若全身紅疹、呼吸困難或嘴唇腫脹，立即就醫。"
    },
    rash: {
      dept: "皮膚科、家庭醫學科、過敏免疫風濕科",
      care: "觀察紅疹範圍、是否發燒或疼痛。避免自行亂擦藥，若快速擴散或有水泡化膿，請就醫。"
    },
    backPain: {
      dept: "骨科、復健科、一般內科、家庭醫學科",
      care: "避免搬重物，適度休息與熱敷。若腳麻、無力、大小便異常或外傷後疼痛，請立即就醫。"
    },
    jointPain: {
      dept: "骨科、過敏免疫風濕科、家庭醫學科",
      care: "減少關節負擔，可冰敷或熱敷。若紅腫熱痛、晨僵或長期反覆疼痛，建議就醫。"
    },
    sleep: {
      dept: "精神科（身心、失眠科）、家庭醫學科",
      care: "固定作息、睡前避免手機與咖啡因。若失眠超過數週或影響生活，建議就醫。"
    },
    stress: {
      dept: "精神科（身心、失眠科）、家庭醫學科",
      care: "可做深呼吸、散步、規律休息，找人傾訴。若長期焦慮、胸悶、失眠或情緒低落，建議就醫。"
    }
  };

  if (val === "") {
    alert("請先選擇症狀");
    return;
  }

  box.innerHTML = `
    <div class="step">
      <h3>建議就診科別</h3>
      <p>${data[val].dept}</p>

      <h3>初步處理建議</h3>
      <p>${data[val].care}</p>

      <p>提醒：本功能僅供初步導引，實際仍以醫師診斷為準。</p>
    </div>
  `;
}

function saveRecord() {
  const record = {
    date: document.getElementById("recordDate").value,
    temperature: document.getElementById("temperature").value,
    bloodPressure: document.getElementById("bloodPressure").value
  };

  if (!/^2026-\d{2}-\d{2}$/.test(record.date)) {
    alert("請輸入正確日期格式：2026-01-01");
    return;
  }

  if (record.bloodPressure !== "" && !record.bloodPressure.includes("/")) {
    alert("血壓格式錯誤，請輸入例如：120/80");
    return;
  }

  let records = JSON.parse(localStorage.getItem("records")) || [];
  records.unshift(record);
  localStorage.setItem("records", JSON.stringify(records));

  alert("已儲存");
  loadRecords();
}

function loadRecords() {
  const list = document.getElementById("recordList");
  if (!list) return;

  let records = JSON.parse(localStorage.getItem("records")) || [];

  if (records.length === 0) {
    list.innerHTML = "<p>目前尚無紀錄。</p>";
    return;
  }

  list.innerHTML = records.map((r, index) => `
    <div class="record-item">
      日期：${r.date}<br>
      體溫：${r.temperature || "未填"} °C<br>
      血壓：${r.bloodPressure || "未填"}<br>
      <button class="delete-btn" onclick="deleteRecord(${index})">刪除</button>
    </div>
  `).join("");
}

function deleteRecord(index) {
  let records = JSON.parse(localStorage.getItem("records")) || [];
  records.splice(index, 1);
  localStorage.setItem("records", JSON.stringify(records));
  loadRecords();
}

/* ===== 機器人互動 ===== */
/* ===== 機器人互動：100題題庫，每次隨機10題 ===== */
let quizIndex = 0;
let quizScore = 0;
let currentQuiz = [];

const quizBank = [

  // ===== 急救觀念 =====
  { q:"傷口流血時第一步應該？", o:["直接貼膠帶","先洗手再加壓止血","用手摸傷口"], a:1 },
  { q:"胸痛合併冒冷汗時最可能是？", o:["胃痛","心肌梗塞","感冒"], a:1 },
  { q:"呼吸困難時應？", o:["休息觀察","立即求救","喝水"], a:1 },
  { q:"窒息無法說話時應？", o:["拍背","哈姆立克法","喝水"], a:1 },
  { q:"CPR壓胸速率約？", o:["50下/分","100-120下/分","200下/分"], a:1 },
  { q:"AED使用原則？", o:["照語音操作","自己亂按","不用開機"], a:0 },

  // ===== 判斷題 =====
  { q:"傷口紅腫熱痛代表？", o:["正在恢復","可能感染","正常現象"], a:1 },
  { q:"發燒超過38度應？", o:["多喝水觀察","完全不用理","大量運動"], a:0 },
  { q:"血壓180/120以上代表？", o:["正常","高血壓危機","低血壓"], a:1 },
  { q:"持續咳嗽超過2週應？", o:["就醫","忽略","多講話"], a:0 },

  // ===== 錯誤行為 =====
  { q:"以下哪個是錯誤傷口處理？", o:["清水沖洗","用髒手摸","覆蓋紗布"], a:1 },
  { q:"胸痛時可以做什麼？", o:["自行開車","等待觀察","撥打119"], a:2 },
  { q:"過敏嚴重時應？", o:["忍耐","立即就醫","喝冰水"], a:1 },
  { q:"窒息時灌水是？", o:["正確","錯誤","看情況"], a:1 },

  // ===== 症狀判斷 =====
  { q:"心肌梗塞常見症狀？", o:["腳痛","胸悶胸痛","牙痛"], a:1 },
  { q:"過敏常見症狀？", o:["發燒","皮膚癢","骨折"], a:1 },
  { q:"脫水可能出現？", o:["口乾","視力變好","長高"], a:0 },
  { q:"低血糖可能出現？", o:["冒冷汗","發燒","流鼻血"], a:0 },

  // ===== 居家照護 =====
  { q:"肌肉發炎應？", o:["熱敷","冷敷","不處理"], a:1 },
  { q:"非發炎痠痛應？", o:["冷敷","熱敷","冰水沖"], a:1 },
  { q:"傷口紗布濕掉應？", o:["繼續用","更換","吹乾"], a:1 },
  { q:"傷口清潔可用？", o:["生理食鹽水","泥水","飲料"], a:0 },

  // ===== 觀念題 =====
  { q:"健康紀錄的用途？", o:["觀察變化","娛樂","炫耀"], a:0 },
  { q:"過敏應該？", o:["避免過敏原","一直接觸","不管"], a:0 },
  { q:"高血壓應？", o:["規律監測","不量","喝咖啡"], a:0 },
  { q:"發燒時應？", o:["補充水分","劇烈運動","熬夜"], a:0 },

  // ===== 科別（保留少量）=====
  { q:"胸痛應看？", o:["心臟內科","牙科","皮膚科"], a:0 },
  { q:"腹痛應看？", o:["胃腸科","眼科","骨科"], a:0 },
  { q:"皮膚癢應看？", o:["皮膚科","骨科","牙科"], a:0 },

  // ===== 進階情境 =====
  { q:"有人昏倒無呼吸應？", o:["等待","CPR+119","拍臉"], a:1 },
  { q:"嬰兒哽塞處理？", o:["成人哈姆立克","拍背+壓胸","喝水"], a:1 },
  { q:"嚴重過敏休克應？", o:["觀察","立即119","吃藥"], a:1 },
  { q:"傷口很深應？", o:["自己處理","就醫","擦藥"], a:1 },

  // ===== 生活習慣 =====
  { q:"預防疾病最好方式？", o:["健康生活","熬夜","不運動"], a:0 },
  { q:"免疫力提升方式？", o:["睡眠充足","不睡覺","壓力大"], a:0 },
  { q:"運動後應？", o:["補水","不理","喝酒"], a:0 },
  { q:"飲食應？", o:["均衡","只吃肉","不吃菜"], a:0 }

];

function startQuiz() {
  document.getElementById("introButtons").style.display = "none";

  quizIndex = 0;
  quizScore = 0;

  currentQuiz = quizBank
    .sort(() => Math.random() - 0.5)
    .slice(0, 10)
    .map(q => {
      const correctText = q.o[q.a];
      const shuffled = [...q.o].sort(() => Math.random() - 0.5);
      return {
        question: q.q,
        options: shuffled,
        answer: shuffled.indexOf(correctText)
      };
    });

  showQuizQuestion();
}

function showQuizQuestion() {
  const quizBox = document.getElementById("quizBox");
  const q = currentQuiz[quizIndex];

  document.getElementById("botQuestion").innerHTML =
    `第 ${quizIndex + 1} 題來囉！<br>${q.question}`;

  quizBox.innerHTML = `
    <div class="step">
      ${q.options.map((option, index) => `
        <button onclick="answerQuiz(${index})">${option}</button>
      `).join("")}
    </div>
  `;
}

function answerQuiz(choice) {
  const q = currentQuiz[quizIndex];

  if (choice === q.answer) {
    quizScore++;
    document.getElementById("botQuestion").innerHTML = "答對了！你很厲害 👍";
  } else {
    document.getElementById("botQuestion").innerHTML =
      `答錯了沒關係 😊<br>正確答案是：${q.options[q.answer]}`;
  }

  quizIndex++;

  setTimeout(() => {
    if (quizIndex < currentQuiz.length) {
      showQuizQuestion();
    } else {
      showQuizResult();
    }
  }, 1000);
}

function showQuizResult() {
  let message = "";

  if (quizScore >= 9) {
    message = "你是健康知識達人！🎉";
  } else if (quizScore >= 6) {
    message = "不錯喔！你有基本健康觀念 💪";
  } else {
    message = "沒關係，可以透過衛教平台繼續學習 ❤️";
  }

  document.getElementById("botQuestion").innerHTML =
    `測驗完成！<br>${message}`;

  document.getElementById("quizBox").innerHTML = `
    <div class="step">
      <p>你的分數：${quizScore} / 10</p>
      <button onclick="enterApp()">Let’s Go 進入衛教</button>
    </div>
  `;
}

function skipIntro() {
  enterApp();
}

function toggleSection(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = el.style.display === "none" ? "block" : "none";
}
function enterApp() {
  const introBox = document.getElementById("introBox");
  const mainApp = document.getElementById("mainApp");

  if (introBox) introBox.style.display = "none";
  if (mainApp) mainApp.style.display = "block";

  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
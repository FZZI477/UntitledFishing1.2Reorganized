// Persistent save system

const SAVE_KEY = "veilwaterFishingSave_v1";

function freshState() {
      return {
        money:0,
        location:"gravitas",
        equipped:"twig",
        owned:["twig"],
        inventory:{},
        caught:{},
        mutations:{},
        cycleStart:Date.now(),
        splitMode:0,
        snowflakeCatches:0,
        snowflakeIntegrity:100,
        rodSort:"nameAZ",
        redeemedCodes:[],
        luckBoostUntil:0,
        weather:"Clear",
        weatherStart:Date.now(),
        previousWeather:"Clear",
        previousPeriod:"day",
        currentPeriod:"day",
        lastPeriodWeather:"Clear",
        sunMasks:0,
        sharkMigrationUntil:0,
        whaleAbundanceUntil:0,
        megaLuckStacks:0,
        lastCaughtRarity:"Common",
        eventCaught:{},
        currentWeather:"Clear",
        lastError:"",
        logs:["Welcome to The Gravitas Waterfall. Your Twig Rod is ready."]
      };
    }

function loadState() {
      try {
        const parsed = JSON.parse(localStorage.getItem(SAVE_KEY));
        return parsed ? Object.assign(freshState(), parsed) : freshState();
      } catch {
        return freshState();
      }
    }

function saveState() {
      localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    }

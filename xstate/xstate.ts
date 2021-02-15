const isPandemiaTrue = ({ pandemia }) => pandemia.value == Value.TRUE;

const isPandemiaFalse = ({ pandemia }) => pandemia.value == Value.FALSE;

const isZoneDisable = ({ pandemia, vaccino }) => pandemia.value == Value.FALSE || vaccino.value == Value.TRUE;

const isZoneEnable = ({ pandemia, vaccino }) => pandemia.value == Value.TRUE && vaccino.value != Value.TRUE;

const isUniversitaEnable = ({ pandemia, vaccino }) => pandemia.value == Value.FALSE || (pandemia.value == Value.TRUE && vaccino.value == Value.TRUE);

const isUniversitaDisable = ({ pandemia, vaccino }) => pandemia.value == Value.TRUE && vaccino.value != Value.TRUE;

const isFarmaciaEnable = ({ pandemia, vaccino }) => pandemia.value == Value.TRUE && vaccino.value != Value.TRUE;

const isFarmaciaDisable = ({ pandemia, vaccino }) =>
  pandemia.value == Value.FALSE || (pandemia.value == Value.TRUE && vaccino.value == Value.TRUE);

const isCaneClickable = ({ pandemia, vaccino, mascherine }) => pandemia.value == Value.FALSE || (pandemia.value == Value.TRUE && vaccino.value == Value.TRUE) || (pandemia.value == Value.TRUE && vaccino.value != Value.TRUE && mascherine > 0);

const isCaneEnable = ({ pandemia, vaccino, mascherine }) => pandemia.value == Value.FALSE || (pandemia.value == Value.TRUE && vaccino.value == Value.TRUE) || (pandemia.value == Value.TRUE && vaccino.value != Value.TRUE && mascherine > 0);

const isCaneDisable = ({ pandemia, vaccino, mascherine }) => pandemia.value == Value.TRUE && vaccino.value != Value.TRUE && mascherine <= 0;

const isUfficioClickable = ({ pandemia, vaccino, mascherine }) => pandemia.value == Value.FALSE || (pandemia.value == Value.TRUE && vaccino.value == Value.TRUE) || (pandemia.value == Value.TRUE && vaccino.value != Value.TRUE && mascherine > 0);

const isUfficioEnable = ({ pandemia, vaccino, zona, mascherine }) => pandemia.value == Value.FALSE || (pandemia.value == Value.TRUE && vaccino.value == Value.TRUE) || (pandemia.value == Value.TRUE && vaccino.value != Value.TRUE && (zona.zona == Zona.GIALLA || zona.zona == Zona.ARANCIONE) && mascherine > 0);

const isUfficioDisable = ({ pandemia, vaccino, zona, mascherine }) => (pandemia.value == Value.TRUE && vaccino.value != Value.TRUE && (zona.zona != Zona.GIALLA && zona.zona != Zona.ARANCIONE)) || (pandemia.value == Value.TRUE && vaccino.value != Value.TRUE && mascherine <= 0);

const isBarClickable = ({ pandemia, vaccino, mascherine }) => pandemia.value == Value.FALSE || (pandemia.value == Value.TRUE && vaccino.value == Value.TRUE) || (pandemia.value == Value.TRUE && vaccino.value != Value.TRUE && mascherine > 0);

const isBarEnable = ({ pandemia, vaccino, zona, mascherine }) => pandemia.value == Value.FALSE || (pandemia.value == Value.TRUE && vaccino.value == Value.TRUE) || (pandemia.value == Value.TRUE && vaccino.value != Value.TRUE && zona.zona == Zona.GIALLA && mascherine > 0);

const isBarDisable = ({ pandemia, vaccino, zona, mascherine }) => (pandemia.value == Value.TRUE && vaccino.value != Value.TRUE && zona.zona != Zona.GIALLA) || (pandemia.value == Value.TRUE && vaccino.value != Value.TRUE && mascherine <= 0);

const State = {
  DISABLE: 'DISABLE',
  ENABLE: 'ENABLE'
}

const Value = {
  FALSE: 'FALSE',
  TRUE: 'TRUE'
}

const Zona = {
  BIANCA: 'BIANCA',
  GIALLA: 'GIALLA',
  ARANCIONE: 'ARANCIONE',
  ROSSA: 'ROSSA'
}

const covid19Machine = Machine({
  id: 'covid-19',
  type: 'parallel',
  context: {
    pandemia: {
      state: State.ENABLE,
      value: Value.FALSE,
    },
    vaccino: {
      state: State.DISABLE,
      value: Value.FALSE
    },
    zona: {
      state: State.DISABLE,
      value: Zona.BIANCA
    },
    mascherine: 0
  },
  states: {
    cina: {
      initial: 'pandemiaFalse',
      states: {
        pandemiaFalse: {
          on: {
            PANDEMIA_TRUE: {
              target: 'pandemiaTrue',
              actions: [
                'setPandemiaEnableTrue',
              ]
            }
          }
        },
        pandemiaTrue: {
          on: {
            PANDEMIA_FALSE: {
              target: 'pandemiaFalse',
              actions: [
                'setPandemiaEnableFalse',
              ]
            }
          }
        }
      }
    },
    pfizer: {
      initial: 'vaccinoDisable',
      states: {
        vaccinoDisable: {
          on: {
            '': {
              target: 'vaccinoFalse',
              cond: isPandemiaTrue,
              actions: [
                'setVaccinoEnableFalse'
              ]
            }
          }
        },
        vaccinoFalse: {
          on: {
            VACCINO_TRUE: {
              target: 'vaccinoTrue',
              actions: [
                'setVaccinoDisableTrue',
              ]
            },
            '': {
              target: 'vaccinoDisable',
              cond: isPandemiaFalse,
              actions: [
                'setVaccinoDisableFalse'
              ]
            }
          }
        },
        vaccinoTrue: {
          type: 'final'
        }
      }
    },
    conte: {
      initial: 'zoneDisable',
      states: {
        zoneDisable: {
          entry: 'setZonaDisableBianca',
          on: {
            '': {
              target: 'zoneEnable',
              cond: isZoneEnable
            }
          }
        },
        zoneEnable: {
          initial: 'zonaGialla',
          on: {
            '': {
              target: 'zoneDisable',
              cond: isZoneDisable
            }
          },
          states: {
            zonaGialla: {
              entry: 'setZonaGialla',
              on: {
                ZONA_ARANCIONE: {
                  target: 'zonaArancione'
                },
                ZONA_ROSSA: {
                  target: 'zonaRossa'
                }
              }
            },
            zonaArancione: {
              entry: 'setZonaArancione',
              on: {
                ZONA_GIALLA: {
                  target: 'zonaGialla'
                },
                ZONA_ROSSA: {
                  target: 'zonaRossa'
                }
              }
            },
            zonaRossa: {
              entry: 'setZonaRossa',
              on: {
                ZONA_ARANCIONE: {
                  target: 'zonaArancione'
                },
                ZONA_GIALLA: {
                  target: 'zonaGialla'
                }
              }
            }
          }
        }
      }
    },
    cittadino: {
      type: 'parallel',
      states: {
        universita: {
          initial: 'universitaEnable',
          states: {
            universitaDisable: {
              on: {
                '': {
                  target: 'universitaEnable',
                  cond: isUniversitaEnable
                }
              }
            },
            universitaEnable: {
              on: {
                UNIVERSITA_CLICK: {
                  target: 'universitaEnable',
                  actions: [
                    'fuoriCasa',
                  ]
                },
                '': {
                  target: 'universitaDisable',
                  cond: isUniversitaDisable
                }
              }
            }
          }
        },
        farmacia: {
          initial: 'farmaciaDisable',
          states: {
            farmaciaDisable: {
              on: {
                '': {
                  target: 'farmaciaEnable',
                  cond: isFarmaciaEnable
                }
              }
            },
            farmaciaEnable: {
              on: {
                FARMACIA_CLICK: {
                  target: 'farmaciaEnable',
                  actions: [
                    'buyMascherine',
                  ]
                },
                '': {
                  target: 'farmaciaDisable',
                  cond: isFarmaciaDisable
                }
              }
            }
          }
        },
        cane: {
          initial: 'caneEnable',
          states: {
            caneEnable: {
              on: {
                CANE_CLICK: [
                  {
                    target: 'caneEnable',
                    cond: isCaneClickable,
                    actions: [
                      'fuoriCasa'
                    ]
                  }
                ],
                '': {
                  target: 'caneDisable',
                  cond: isCaneDisable
                }
              }
            },
            caneDisable: {
              on: {
                '': {
                  target: 'caneEnable',
                  cond: isCaneEnable
                }
              }
            }
          }
        },
        ufficio: {
          initial: 'ufficioEnable',
          states: {
            ufficioEnable: {
              on: {
                UFFICIO_CLICK: [
                  {
                    target: 'ufficioEnable',
                    cond: isUfficioClickable,
                    actions: [
                      'fuoriCasa'
                    ]
                  }
                ],
                '': {
                  target: 'ufficioDisable',
                  cond: isUfficioDisable
                }
              }
            },
            ufficioDisable: {
              on: {
                '': {
                  target: 'ufficioEnable',
                  cond: isUfficioEnable
                }
              }
            }
          }
        },
        bar: {
          initial: 'barEnable',
          states: {
            barEnable: {
              on: {
                BAR_CLICK: [
                  {
                    target: 'barEnable',
                    cond: isBarClickable,
                    actions: [
                      'fuoriCasa'
                    ]
                  }
                ],
                '': {
                  target: 'barDisable',
                  cond: isBarDisable
                }
              }
            },
            barDisable: {
              on: {
                '': {
                  target: 'barEnable',
                  cond: isBarEnable
                }
              }
            }
          }
        }
      }
    }
  }
},
{
  actions: {
    setPandemiaEnableTrue: assign({
      pandemia: (context, event) => {
        return pandemia = {
          state: State.ENABLE,
          value: Value.TRUE
        }
      }
    }),
    setPandemiaEnableFalse: assign({
      pandemia: (context, event) => {
        return pandemia = {
          state: State.ENABLE,
          value: Value.FALSE
        }
      }
    }),
    setVaccinoEnableFalse: assign({
      vaccino: (context, event) => {
        return vaccino = {
          state: State.ENABLE,
          value: Value.FALSE
        }
      }
    }),
    setVaccinoDisableFalse: assign({
      vaccino: (context, event) => {
        return vaccino = {
          state: State.DISABLE,
          value: Value.FALSE
        }
      }
    }),
    setVaccinoDisableTrue: assign({
      vaccino: (context, event) => {
        return pandemia = {
          state: State.DISABLE,
          value: Value.TRUE
        }
      }
    }),
    buyMascherine: assign({
      mascherine: (context, event) => {
        if (context.mascherine > 0) {
          return mascherine = context.mascherine + 9
        } else {
          return mascherine = context.mascherine + 10
        }
      }
    }),
    fuoriCasa: assign({
      mascherine: (context, event) => {
        if (context.pandemia.value == Value.TRUE &&
            context.vaccino.value != Value.TRUE && context.mascherine > 0) {
          return mascherine = context.mascherine - 1;
        } else {
          return mascherine = context.mascherine
        }
      }
    }),
    setZonaGialla: assign({
      zona: (context, event) => {
        return zona = {
          state: State.ENABLE,
          zona: Zona.GIALLA
        }
      }
    }),
    setZonaArancione: assign({
      zona: (context, event) => {
        return zona = {
          state: State.ENABLE,
          zona: Zona.ARANCIONE
        }
      }
    }),
    setZonaRossa: assign({
      zona: (context, event) => {
        return zona = {
          state: State.ENABLE,
          zona: Zona.ROSSA
        }
      }
    }),
    setZonaDisableBianca: assign({
      zona: (context, event) => {
        return zona = {
          state: State.DISABLE,
          zona: Zona.BIANCA
        }
      }
    }),
  }
}
);

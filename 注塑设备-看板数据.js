/**
 * 注塑设备运行效率看板 - 数据文件
 * 行业：注塑生产
 *
 * 说明：本文件为模拟数据（3 小部门 × 8 台 = 24 台），用于看板演示。
 *       将来导入真实数据时，按此结构替换即可，看板主体不用改。
 *       看板 HTML 通过 <script src> 引入本文件，读取全局变量 BOARD_DATA 渲染。
 *
 * 车间层级（脱敏命名，便于分享）：
 *   L1 总部门：示范注塑厂（顶部显示）
 *   L2 小部门：A区 / B区 / C区（设备 workshop 字段，看板按此筛选）
 *   L3 设备：编号 = 小部门字母 + 2位数字（01~08），如 A01；设备名 = 设备001~设备024
 *
 * 字段说明（每台设备）：
 *   id              设备编号（小部门字母+2位数字，如 A01）
 *   name            设备名称（设备001~设备024，脱敏）
 *   model           设备型号
 *   type            设备类型（小型注塑机 / 中型注塑机 / 大型注塑机）
 *   workshop        所属小部门（A区~C区）
 *   status          当前状态：running 运行 / idle 待机 / fault 故障 / maintenance 维护
 *   planTime        计划生产时间（分钟）- 8 小时班次通常为 480
 *   runTime         实际运行时间（分钟）
 *   stopTime        停机时间（分钟，含故障 + 待机 + 换型等）
 *   theoryOutput    理论产量（按运行时间计算）
 *   actualOutput    实际产量
 *   qualifiedOutput 合格产量
 *   faultType       主要故障类型（无故障填 "无"）
 *   faultCount      故障次数
 *   faultTime       故障总时长（分钟）
 *   trend           近 7 天 OEE 走势（百分比数组，最新一天在末尾）
 *   faultRecords    今日故障明细 [{ startTime, type, duration, desc }]
 *
 * 指标由看板自动计算：
 *   稼动率 Availability = runTime / planTime
 *   性能率 Performance = actualOutput / theoryOutput
 *   良率   Quality     = qualifiedOutput / actualOutput
 *   OEE    综合设备效率 = 稼动率 × 性能率 × 良率
 */
window.BOARD_DATA = {
  "meta": {
    "factory": "示范注塑厂",
    "date": "2026-07-23",
    "shift": "白班 08:00-17:00",
    "updateTime": "2026-07-23 09:00",
    "unit": {
      "time": "分钟",
      "output": "件"
    }
  },
  "devices": [
    {
      "id": "A01",
      "name": "设备001",
      "model": "BOY-50",
      "type": "小型注塑机",
      "status": "running",
      "workshop": "A区",
      "planTime": 480,
      "runTime": 437,
      "stopTime": 43,
      "theoryOutput": 800,
      "actualOutput": 667,
      "qualifiedOutput": 651,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        67,
        79,
        68,
        71,
        78,
        82,
        74
      ],
      "faultRecords": []
    },
    {
      "id": "A02",
      "name": "设备002",
      "model": "BOY-50",
      "type": "小型注塑机",
      "status": "running",
      "workshop": "A区",
      "planTime": 480,
      "runTime": 401,
      "stopTime": 79,
      "theoryOutput": 800,
      "actualOutput": 591,
      "qualifiedOutput": 572,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        60,
        66,
        63,
        63,
        57,
        60,
        60
      ],
      "faultRecords": []
    },
    {
      "id": "A03",
      "name": "设备003",
      "model": "德马格50",
      "type": "小型注塑机",
      "status": "running",
      "workshop": "A区",
      "planTime": 480,
      "runTime": 431,
      "stopTime": 49,
      "theoryOutput": 800,
      "actualOutput": 669,
      "qualifiedOutput": 639,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        75,
        66,
        74,
        69,
        74,
        73,
        72
      ],
      "faultRecords": []
    },
    {
      "id": "A04",
      "name": "设备004",
      "model": "海天200",
      "type": "中型注塑机",
      "status": "running",
      "workshop": "A区",
      "planTime": 480,
      "runTime": 445,
      "stopTime": 35,
      "theoryOutput": 400,
      "actualOutput": 332,
      "qualifiedOutput": 319,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        73,
        68,
        71,
        80,
        75,
        80,
        74
      ],
      "faultRecords": []
    },
    {
      "id": "A05",
      "name": "设备005",
      "model": "海天200",
      "type": "中型注塑机",
      "status": "running",
      "workshop": "A区",
      "planTime": 480,
      "runTime": 409,
      "stopTime": 71,
      "theoryOutput": 400,
      "actualOutput": 316,
      "qualifiedOutput": 308,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        70,
        69,
        65,
        61,
        60,
        60,
        66
      ],
      "faultRecords": []
    },
    {
      "id": "A06",
      "name": "设备006",
      "model": "震雄200",
      "type": "中型注塑机",
      "status": "idle",
      "workshop": "A区",
      "planTime": 480,
      "runTime": 236,
      "stopTime": 244,
      "theoryOutput": 400,
      "actualOutput": 184,
      "qualifiedOutput": 178,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        27,
        28,
        28,
        23,
        23,
        20,
        22
      ],
      "faultRecords": []
    },
    {
      "id": "A07",
      "name": "设备007",
      "model": "海天500",
      "type": "大型注塑机",
      "status": "fault",
      "workshop": "A区",
      "planTime": 480,
      "runTime": 293,
      "stopTime": 187,
      "theoryOutput": 150,
      "actualOutput": 89,
      "qualifiedOutput": 87,
      "faultType": "电气故障",
      "faultCount": 4,
      "faultTime": 125,
      "trend": [
        32,
        28,
        29,
        36,
        33,
        41,
        35
      ],
      "faultRecords": [
        {
          "startTime": "09:31",
          "type": "电气故障",
          "duration": 27,
          "desc": "电气故障，停机 27 分钟处理"
        },
        {
          "startTime": "10:24",
          "type": "电气故障",
          "duration": 14,
          "desc": "电气故障，停机 14 分钟处理"
        },
        {
          "startTime": "11:07",
          "type": "电气故障",
          "duration": 37,
          "desc": "电气故障，停机 37 分钟处理"
        },
        {
          "startTime": "12:03",
          "type": "电气故障",
          "duration": 47,
          "desc": "电气故障，停机 47 分钟处理"
        }
      ]
    },
    {
      "id": "A08",
      "name": "设备008",
      "model": "海天500",
      "type": "大型注塑机",
      "status": "maintenance",
      "workshop": "A区",
      "planTime": 480,
      "runTime": 0,
      "stopTime": 480,
      "theoryOutput": 150,
      "actualOutput": 0,
      "qualifiedOutput": 0,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        64,
        80,
        56,
        0,
        0,
        0,
        0
      ],
      "faultRecords": []
    },
    {
      "id": "B01",
      "name": "设备009",
      "model": "BOY-50",
      "type": "小型注塑机",
      "status": "running",
      "workshop": "B区",
      "planTime": 480,
      "runTime": 467,
      "stopTime": 13,
      "theoryOutput": 800,
      "actualOutput": 688,
      "qualifiedOutput": 670,
      "faultType": "模具故障",
      "faultCount": 1,
      "faultTime": 20,
      "trend": [
        87,
        75,
        75,
        75,
        80,
        80,
        81
      ],
      "faultRecords": [
        {
          "startTime": "11:45",
          "type": "模具故障",
          "duration": 20,
          "desc": "模具故障，停机 20 分钟处理"
        }
      ]
    },
    {
      "id": "B02",
      "name": "设备010",
      "model": "德马格50",
      "type": "小型注塑机",
      "status": "running",
      "workshop": "B区",
      "planTime": 480,
      "runTime": 420,
      "stopTime": 60,
      "theoryOutput": 800,
      "actualOutput": 622,
      "qualifiedOutput": 605,
      "faultType": "模具故障",
      "faultCount": 2,
      "faultTime": 19,
      "trend": [
        61,
        60,
        73,
        66,
        58,
        64,
        66
      ],
      "faultRecords": [
        {
          "startTime": "13:52",
          "type": "模具故障",
          "duration": 6,
          "desc": "模具故障，停机 6 分钟处理"
        },
        {
          "startTime": "14:18",
          "type": "模具故障",
          "duration": 13,
          "desc": "模具故障，停机 13 分钟处理"
        }
      ]
    },
    {
      "id": "B03",
      "name": "设备011",
      "model": "德马格50",
      "type": "小型注塑机",
      "status": "running",
      "workshop": "B区",
      "planTime": 480,
      "runTime": 456,
      "stopTime": 24,
      "theoryOutput": 800,
      "actualOutput": 691,
      "qualifiedOutput": 684,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        73,
        75,
        82,
        82,
        86,
        89,
        81
      ],
      "faultRecords": []
    },
    {
      "id": "B04",
      "name": "设备012",
      "model": "海天200",
      "type": "中型注塑机",
      "status": "running",
      "workshop": "B区",
      "planTime": 480,
      "runTime": 420,
      "stopTime": 60,
      "theoryOutput": 400,
      "actualOutput": 321,
      "qualifiedOutput": 308,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        67,
        64,
        71,
        63,
        60,
        72,
        67
      ],
      "faultRecords": []
    },
    {
      "id": "B05",
      "name": "设备013",
      "model": "震雄200",
      "type": "中型注塑机",
      "status": "running",
      "workshop": "B区",
      "planTime": 480,
      "runTime": 456,
      "stopTime": 24,
      "theoryOutput": 400,
      "actualOutput": 346,
      "qualifiedOutput": 336,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        86,
        79,
        82,
        86,
        74,
        85,
        80
      ],
      "faultRecords": []
    },
    {
      "id": "B06",
      "name": "设备014",
      "model": "博创200",
      "type": "中型注塑机",
      "status": "idle",
      "workshop": "B区",
      "planTime": 480,
      "runTime": 220,
      "stopTime": 260,
      "theoryOutput": 400,
      "actualOutput": 178,
      "qualifiedOutput": 174,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        16,
        19,
        24,
        24,
        21,
        14,
        20
      ],
      "faultRecords": []
    },
    {
      "id": "B07",
      "name": "设备015",
      "model": "伊之密500",
      "type": "大型注塑机",
      "status": "fault",
      "workshop": "B区",
      "planTime": 480,
      "runTime": 277,
      "stopTime": 203,
      "theoryOutput": 150,
      "actualOutput": 79,
      "qualifiedOutput": 78,
      "faultType": "液压故障",
      "faultCount": 2,
      "faultTime": 92,
      "trend": [
        34,
        32,
        23,
        24,
        36,
        24,
        30
      ],
      "faultRecords": [
        {
          "startTime": "10:31",
          "type": "液压故障",
          "duration": 25,
          "desc": "液压故障，停机 25 分钟处理"
        },
        {
          "startTime": "11:29",
          "type": "液压故障",
          "duration": 67,
          "desc": "液压故障，停机 67 分钟处理"
        }
      ]
    },
    {
      "id": "B08",
      "name": "设备016",
      "model": "震雄500",
      "type": "大型注塑机",
      "status": "maintenance",
      "workshop": "B区",
      "planTime": 480,
      "runTime": 0,
      "stopTime": 480,
      "theoryOutput": 150,
      "actualOutput": 0,
      "qualifiedOutput": 0,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        63,
        63,
        55,
        0,
        0,
        0,
        0
      ],
      "faultRecords": []
    },
    {
      "id": "C01",
      "name": "设备017",
      "model": "德马格50",
      "type": "小型注塑机",
      "status": "running",
      "workshop": "C区",
      "planTime": 480,
      "runTime": 402,
      "stopTime": 78,
      "theoryOutput": 800,
      "actualOutput": 629,
      "qualifiedOutput": 608,
      "faultType": "温控异常",
      "faultCount": 1,
      "faultTime": 33,
      "trend": [
        58,
        65,
        72,
        56,
        68,
        59,
        64
      ],
      "faultRecords": [
        {
          "startTime": "11:40",
          "type": "温控异常",
          "duration": 33,
          "desc": "温控异常，停机 33 分钟处理"
        }
      ]
    },
    {
      "id": "C02",
      "name": "设备018",
      "model": "海天50",
      "type": "小型注塑机",
      "status": "running",
      "workshop": "C区",
      "planTime": 480,
      "runTime": 424,
      "stopTime": 56,
      "theoryOutput": 800,
      "actualOutput": 629,
      "qualifiedOutput": 607,
      "faultType": "液压故障",
      "faultCount": 1,
      "faultTime": 33,
      "trend": [
        65,
        67,
        71,
        75,
        64,
        75,
        67
      ],
      "faultRecords": [
        {
          "startTime": "13:49",
          "type": "液压故障",
          "duration": 33,
          "desc": "液压故障，停机 33 分钟处理"
        }
      ]
    },
    {
      "id": "C03",
      "name": "设备019",
      "model": "BOY-50",
      "type": "小型注塑机",
      "status": "running",
      "workshop": "C区",
      "planTime": 480,
      "runTime": 406,
      "stopTime": 74,
      "theoryOutput": 800,
      "actualOutput": 651,
      "qualifiedOutput": 635,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        66,
        72,
        75,
        60,
        65,
        69,
        67
      ],
      "faultRecords": []
    },
    {
      "id": "C04",
      "name": "设备020",
      "model": "博创200",
      "type": "中型注塑机",
      "status": "running",
      "workshop": "C区",
      "planTime": 480,
      "runTime": 461,
      "stopTime": 19,
      "theoryOutput": 400,
      "actualOutput": 364,
      "qualifiedOutput": 358,
      "faultType": "顶针异常",
      "faultCount": 2,
      "faultTime": 34,
      "trend": [
        83,
        80,
        90,
        79,
        79,
        93,
        86
      ],
      "faultRecords": [
        {
          "startTime": "12:05",
          "type": "顶针异常",
          "duration": 5,
          "desc": "顶针异常，停机 5 分钟处理"
        },
        {
          "startTime": "13:18",
          "type": "顶针异常",
          "duration": 29,
          "desc": "顶针异常，停机 29 分钟处理"
        }
      ]
    },
    {
      "id": "C05",
      "name": "设备021",
      "model": "海天200",
      "type": "中型注塑机",
      "status": "running",
      "workshop": "C区",
      "planTime": 480,
      "runTime": 434,
      "stopTime": 46,
      "theoryOutput": 400,
      "actualOutput": 339,
      "qualifiedOutput": 329,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        67,
        66,
        67,
        77,
        72,
        73,
        74
      ],
      "faultRecords": []
    },
    {
      "id": "C06",
      "name": "设备022",
      "model": "博创200",
      "type": "中型注塑机",
      "status": "idle",
      "workshop": "C区",
      "planTime": 480,
      "runTime": 226,
      "stopTime": 254,
      "theoryOutput": 400,
      "actualOutput": 170,
      "qualifiedOutput": 164,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        24,
        27,
        20,
        16,
        17,
        11,
        19
      ],
      "faultRecords": []
    },
    {
      "id": "C07",
      "name": "设备023",
      "model": "伊之密500",
      "type": "大型注塑机",
      "status": "fault",
      "workshop": "C区",
      "planTime": 480,
      "runTime": 188,
      "stopTime": 292,
      "theoryOutput": 150,
      "actualOutput": 54,
      "qualifiedOutput": 53,
      "faultType": "温控异常",
      "faultCount": 4,
      "faultTime": 70,
      "trend": [
        20,
        20,
        17,
        15,
        20,
        22,
        14
      ],
      "faultRecords": [
        {
          "startTime": "10:13",
          "type": "温控异常",
          "duration": 9,
          "desc": "温控异常，停机 9 分钟处理"
        },
        {
          "startTime": "12:23",
          "type": "温控异常",
          "duration": 19,
          "desc": "温控异常，停机 19 分钟处理"
        },
        {
          "startTime": "13:30",
          "type": "温控异常",
          "duration": 18,
          "desc": "温控异常，停机 18 分钟处理"
        },
        {
          "startTime": "15:19",
          "type": "温控异常",
          "duration": 24,
          "desc": "温控异常，停机 24 分钟处理"
        }
      ]
    },
    {
      "id": "C08",
      "name": "设备024",
      "model": "海天500",
      "type": "大型注塑机",
      "status": "maintenance",
      "workshop": "C区",
      "planTime": 480,
      "runTime": 0,
      "stopTime": 480,
      "theoryOutput": 150,
      "actualOutput": 0,
      "qualifiedOutput": 0,
      "faultType": "无",
      "faultCount": 0,
      "faultTime": 0,
      "trend": [
        77,
        83,
        63,
        0,
        0,
        0,
        0
      ],
      "faultRecords": []
    }
  ]
};

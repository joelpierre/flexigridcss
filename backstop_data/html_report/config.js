report({
  "testSuite": "BackstopJS",
  "tests": [
    {
      "pair": {
        "reference": "../bitmaps_reference/flexigridcss_FlexigridCSS_Homepage_0_document_0_phone.png",
        "test": "../bitmaps_test/20181024-112639/flexigridcss_FlexigridCSS_Homepage_0_document_0_phone.png",
        "selector": "document",
        "fileName": "flexigridcss_FlexigridCSS_Homepage_0_document_0_phone.png",
        "label": "FlexigridCSS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://flexigridcss.test",
        "referenceUrl": "http://flexigridcss.test",
        "expect": 0,
        "viewportLabel": "phone",
        "diff": {
          "isSameDimensions": false,
          "dimensionDifference": {
            "width": 0,
            "height": -39
          },
          "misMatchPercentage": "17.87",
          "analysisTime": 36
        },
        "diffImage": "../bitmaps_test/20181024-112639/failed_diff_flexigridcss_FlexigridCSS_Homepage_0_document_0_phone.png"
      },
      "status": "fail"
    },
    {
      "pair": {
        "reference": "../bitmaps_reference/flexigridcss_FlexigridCSS_Homepage_0_document_1_tablet.png",
        "test": "../bitmaps_test/20181024-112639/flexigridcss_FlexigridCSS_Homepage_0_document_1_tablet.png",
        "selector": "document",
        "fileName": "flexigridcss_FlexigridCSS_Homepage_0_document_1_tablet.png",
        "label": "FlexigridCSS Homepage",
        "requireSameDimensions": true,
        "misMatchThreshold": 0.1,
        "url": "http://flexigridcss.test",
        "referenceUrl": "http://flexigridcss.test",
        "expect": 0,
        "viewportLabel": "tablet",
        "diff": {
          "isSameDimensions": true,
          "dimensionDifference": {
            "width": 0,
            "height": 0
          },
          "misMatchPercentage": "12.30",
          "analysisTime": 85
        },
        "diffImage": "../bitmaps_test/20181024-112639/failed_diff_flexigridcss_FlexigridCSS_Homepage_0_document_1_tablet.png"
      },
      "status": "fail"
    }
  ],
  "id": "flexigridcss"
});
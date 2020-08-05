import React, { useState, useEffect } from "react";

const C1005 = ({ selected, color }) => {

    const [body, setBody] = useState('#FFFFFF');
    const [sleeves, setSleeves] = useState('#FFFFFF');
    const [collar, setCollar] = useState('#FFFFFF');
    useEffect(() => {
        if (selected === 'body') {
            setBody(color)
        }
        if (selected === 'collar') {
            setCollar(color)
        }
        if (selected === 'sleeves') {
            setSleeves(color)
        }

    });
    return (
        <svg id="C1005_T_Shirt_Front_A" xmlns="http://www.w3.org/2000/svg" xlinkHref="http://www.w3.org/1999/xlink"
             viewBox="0 0 2048 2048" width="800" height="600">

            <g id="custom-color-swatches">
                <g id="Group_C1005_Collar">
                    <g id="Pattern_C1005_Collar_000">
                        <path id="Option_C1005_Collar_000_1"
                              d="M1063.2,251.464c-5.522,0-11.088-.16-16.544-.474-49.269-2.843-93.817-23.843-122.512-40.959-38.914-23.212-64.875-48.518-76.195-64.461-26.511-37.339-32.4-56.552-33.7-63.08l-.193-.969.967-.2a85.083,85.083,0,0,0,10.908-2.905c10.151-3.7,22.528-21.2,26.44-27.628,2.662-4.378,4.9-5.783,9.2-5.783,1.489,0,3.19.154,5.343.348,1,.09,2.089.189,3.283.282.875.078,1.647.115,2.373.115.766,0,1.385-.04,2.04-.082s1.347-.087,2.187-.087c4.645,0,13.763,1.482,43.162,8.711,41.264,9.9,95.461,14.718,165.682,14.718l3.008,0c60.623-.115,98.148-3.232,129.522-10.76,23.819-5.716,42-8.548,55.577-8.659,4.32,0,8.005,4.961,11.906,10.214,3.168,4.266,6.444,8.678,10.159,10.773,7.178,3.9,21.723,10.3,26.009,12.169l.743.324-.163.794c-4.4,21.354-37.772,62.251-65,92.8-18.284,20.517-46.752,39.219-80.16,52.662A308.45,308.45,0,0,1,1063.2,251.464ZM891.519,107.874c20.987,25.765,62.818,55.6,84.648,66.218,16.889,8.216,48.325,23.508,89.177,23.508,4.721,0,9.524-.2,14.275-.6,46.15-3.9,75.44-13.829,120.539-40.862,23.248-13.935,36.86-28.582,44.184-38.417a82.561,82.561,0,0,0,9.462-15.773c-3.966,1.649-14,5.307-37.866,12.011-35.8,10.051-80.483,15.6-129.229,16.037q-1.676.015-3.376.015c-34.247,0-75.1-4.508-104.937-7.8-14.269-1.575-25.539-2.819-32.715-3.217C926.854,117.944,900.429,110.517,891.519,107.874Z"
                              fill={collar} fillRule="evenodd"/>
                    </g>
                </g>
                <g id="Group_C1005_Sleeves">
                    <g id="Pattern_C1005_Sleeves_000">
                        <path id="Option_C1005_Sleeves_000_1"
                              d="M565.79,875.632c-16.265,0-48.105-4.528-97.339-13.844-94.389-20.555-204.5-49.147-209.326-52.232a19.382,19.382,0,0,0-3.318-1.589c-3.071-1.232-6.246-2.507-4.282-8.552.444-1.368,1.836-7.509,3.942-16.8,8.241-36.372,30.134-132.99,60.179-227.067,15.141-47.4,24.335-78.52,31.049-101.239,10.125-34.263,15.207-51.461,27.569-80.812,15.54-36.9,48.805-73.513,96.2-105.882l.18.255-.176-.257.09-.062c1.333-.906,2.617-1.774,3.83-2.583l.312-.208,1.457-.969.134,1.719c.408,7.148,3.55,17.525,8.306,33.232,2.824,9.329,6.34,20.939,10.22,34.987,3.141,11.372,6.334,23,9.434,34.278,9.223,33.573,17.934,65.285,21.547,76.686,3.116,9.829,5.148,18.883,8.838,35.319,2.056,9.162,4.616,20.564,8.178,35.756,15.142,57.6,18.039,64.35,25.039,80.652,1.163,2.709,2.44,5.682,3.9,9.191,3.531,8.465,7.85,17.886,12.026,27,8.121,17.714,16.518,36.032,20.009,49.131.176.661.353,1.381.529,2.145l-1.415.41a512.685,512.685,0,0,1-5.09,58.85c-1.35,9.063-2.769,17.677-4.142,26.008-3.559,21.611-6.633,40.275-5.645,50.928.049.518,4.274,51.9-7.656,53.943-.68.116-1.346.249-2.039.388A55.585,55.585,0,0,1,565.79,875.632Zm941.954-6.067c-3.348-32.2-3.152-65.242-3.15-65.572v-.1l4.467-22.025c5.474-27.008,11.68-57.619,17.546-86.08,8.03-38.957,14.45-63.016,21.246-88.486,4.891-18.327,9.949-37.279,15.75-62.537,10.16-44.238,24.139-93.956,35.372-133.905,3.9-13.863,7.58-26.957,10.626-38.135,10.049-36.875,16.752-86.354,18.568-100.64l.215-1.692,1.372,1.014c29.377,21.728,52.769,43.574,78.222,73.048,39.04,45.209,52.647,117.009,61.651,164.521,2.855,15.064,5.11,26.963,7.555,34.7,5.9,18.669,23.956,90.506,38.465,148.228,10.624,42.265,19.8,78.766,21.4,83.3,1.556,4.411,1.836,7.042.934,8.8-.933,1.817-2.955,2.4-5.295,3.082a36.563,36.563,0,0,0-3.752,1.247c-2.168.885-23.447,9.323-102.021,32.792-67.892,20.279-171.139,43.161-200,46.785-6.535.82-12.6,1.674-18.018,2.538l-1.043.166Z"
                              fill={sleeves} fillRule="evenodd"/>
                    </g>
                </g>
                <g id="Group_C1005_Body">
                    <g id="Pattern_C1005_Body_000">
                        <path id="Option_C1005_Body_000_1"
                              d="M1032.3,1998c-85.128,0-145.51-.537-179.469-1.6-86.251-2.689-251.133-20.5-274.125-27.008-23.256-6.585-22.355-10.427-17.247-31.707,6.707-55.242,38.088-415.942,43.362-613.719,2.445-91.638,8.026-193.521,12.949-283.41,5.493-100.265,10.236-186.856,8.049-217.495-4.057-56.845-24.6-141.7-24.809-142.551l.334-.1c-3.712-12.793-11.673-30.16-19.384-46.979-4.183-9.125-8.508-18.56-12.052-27.056-1.461-3.5-2.735-6.469-3.895-9.172-7.042-16.4-9.957-23.186-25.142-80.959-3.572-15.229-6.133-26.638-8.191-35.805-3.677-16.379-5.7-25.4-8.791-35.147-3.626-11.443-12.347-43.189-21.58-76.8-3.1-11.27-6.286-22.88-9.423-34.238-3.874-14.025-7.385-25.622-10.206-34.941-4.8-15.844-7.967-26.311-8.389-33.7l-.032-.573.476-.317A486.979,486.979,0,0,1,525.7,235.253c44.868-22.544,137.189-70.467,201.962-106.428,38.629-21.447,65.46-38.758,67.739-40.858,3.3-3.3,9.552-4.581,16.79-6.064.934-.192,1.88-.385,2.835-.587l.99-.209.2.992c1.275,6.4,7.08,25.287,33.369,62.313,11.2,15.777,36.941,40.848,75.589,63.9,28.5,17,72.737,37.861,121.6,40.679,5.418.313,10.945.471,16.428.471a306.441,306.441,0,0,0,113.3-22c33.127-13.33,61.33-31.846,79.413-52.137,38.252-42.924,61.169-75.551,64.53-91.872l.248-1.207,1.985.863c.47.2,11.457,4.972,15.367,10.553,7.465,3.56,106.064,60.935,189.628,111.781,42.617,25.931,74.886,45.841,102.089,65.959l.4.3v.568l-.008.069c-1.817,14.311-8.531,63.881-18.623,100.914-3.049,11.187-6.731,24.286-10.631,38.154-11.226,39.927-25.2,89.618-35.347,133.807-5.809,25.294-10.871,44.264-15.766,62.608-6.789,25.442-13.2,49.472-21.22,88.371-5.851,28.389-12.041,58.922-17.5,85.861l-4.492,22.144-.3-.03.286.074c-.1.4-10.353,40.169-14.374,59.535l-.01.056-.019.055a37.513,37.513,0,0,0-2.041,9.532l-.036.71-.137.04c-.564,4.093-3.641,29.661-4.927,108.561-.62,37.916-.941,110.987-1.313,195.6-.49,111.5-1.1,250.26-2.642,366.848-2.118,160.238,12.637,267.13,21.454,331,2.392,17.333,4.283,31.023,5.14,41.111,2.069,24.308,1.79,36.591-5.326,45.122-7.263,8.706-21.364,12.792-48.31,18.158-50.944,10.144-172.085,16.8-233.1,16.921-9.385.019-23.17.075-40.048.142C1141.493,1997.783,1087.563,1998,1032.3,1998Zm92.263-1807.379c.1-7.273.343-16.949.943-21.745.807-6.46-1.825-13.739-2.67-15.86-3.8.085-22.809.484-44.463.484-21.912,0-51.019-.421-66.273-2.41-5.032,11.177-5.558,19.5-5.6,36.74l0,1.416-1.333-.477a291.548,291.548,0,0,1-29.875-12.878c-22.716-11.051-66.929-42.757-87.333-69.291l-1.938-2.519,3.031.956c.339.107,34.143,10.7,56.74,11.955,7.229.4,18.52,1.647,32.817,3.225,29.789,3.287,70.587,7.789,104.727,7.789,1.127,0,2.243-.006,3.355-.015,48.571-.438,93.077-5.958,128.706-15.963,33.693-9.462,39.517-12.761,39.749-12.9l2.271-1.332-.809,2.5c-.1.3-10.345,30.53-55.422,57.549-29.361,17.6-51.9,27.693-75.371,33.754l-1.267.327Z"
                              fill={body}/>
                    </g>
                </g>
            </g>
            <g id="custom_badge-positions">
                <g id="Front_Center">
                    <rect x="653.356" y="369.39" width="795.536" height="928.126" fill="none"/>
                </g>
            </g>
            <image className="background-product" width="2048" height="2048"
                   xlinkHref="https://media.reformclothing.com/design_lab/ysd-products/C1005_T-Shirt/C1005_T_Shirt_Front_A_2048.png"/>
            <image width="2048" height="2048" className="decoration__preview-image"
                   xlinkHref="https://rendering.documents.cimpress.io/v1/dcl/preview?format=png&amp;width=2048&amp;instructions_uri=https%3A%2F%2Fuds.documents.cimpress.io%2Fv3%2Finstructions%3Apreview%3FdocumentUri%3DlZA%252FT8MwEMW%252Fi%252Bc6cR2niTNSQQWIBRUWxOA%252F58ZqE0d2UlRV%252Fe5cgC4siMnn987vfuczOUJMPvSkITxjZEHSfsJ6ff9EH183D3yzvUXRhX58hiEkP4Z4eokHbGnHcUhNns9eymwwUwdzZXw3REgp8yE%252Fsjxen3lIebWSZc3qmprKllRYJ2ktpKLC1FJI6fDU%252BTDpg08tWBx8jSXNmaQpOmUgkebtTLxFhIpJsdIVUK61pAIKR2slJS21ckKALrTlGNKrDuadloyVdxFx15gIEZ0Pb8cWrYKxrsN7C37XjrNQfgsWTIhqxA%252Fagmn7cAi7E9ppRuy%252BdHJZ%252FNAACMm45dRygyvppaZKMUkZdyW3ShSGuV80N8rs%252F4YR%252F4B5v1w%252BAQ%253D%253D&amp;scene=https://scene.products.cimpress.io/v1/scenes/4b9e68ca-f6ac-48ab-8fc3-d3a8db049821"/>
        </svg>
    )
};

export default C1005
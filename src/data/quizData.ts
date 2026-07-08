export type QuizCategory =
  'Road Signs' | 'Traffic Rules' | 'Penalties' | 'Defensive Driving' | 'General & Republic Acts'

export interface QuizQuestion {
  id: number
  category: QuizCategory
  question: string
  image: string
  options: string[]
  correctAnswer: string
  explanation: string
  source: string
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    category: 'Road Signs',
    question: "A red octagonal sign with the word 'STOP' in white letters requires drivers to:",
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/Stop_sign_light_red.jpg',
    options: [
      'Slow down and proceed if no other vehicles are visible',
      'Come to a complete stop at the marked line, then proceed when safe',
      'Yield to traffic from the right only',
      'Stop only if pedestrians are crossing',
    ],
    correctAnswer: 'B',
    explanation:
      'A STOP sign requires a complete stop at the marked line — both wheels stationary — regardless of whether other vehicles or pedestrians are present.',
    source: 'PH Road Signs Manual R1-1; RA 4136 Sec. 35',
  },
  {
    id: 2,
    category: 'Road Signs',
    question:
      "A red and white inverted triangle sign with the word 'YIELD' (or 'GIVE WAY') instructs the driver to:",
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/Give-way-sign.jpg',
    options: [
      'Stop immediately and wait for a signal',
      'Slow down or stop if necessary, and give way to traffic on the main road',
      'Take right of way over all other vehicles',
      'Watch for a sharp curve ahead',
    ],
    correctAnswer: 'B',
    explanation:
      'A YIELD sign means slow down, stop if necessary, and give way to vehicles on the main road. A complete stop is required only if other vehicles or pedestrians make it necessary.',
    source: 'PH Road Signs Manual R1-2',
  },
  {
    id: 3,
    category: 'Road Signs',
    question:
      'A white circular sign with a red border showing a U-shaped arrow crossed by a red diagonal slash means:',
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/No-u-turn-sign-615x1024.jpg',
    options: [
      'U-turns allowed only on weekends',
      'No U-turn permitted at this location',
      'Slow down for U-turn ahead',
      'Yield to vehicles making U-turns',
    ],
    correctAnswer: 'B',
    explanation:
      'This regulatory sign prohibits U-turns at the indicated location. Making a U-turn here is a traffic violation under LTO rules.',
    source: 'PH Road Signs Manual, Prohibitive Signs',
  },
  {
    id: 4,
    category: 'Road Signs',
    question: 'A yellow diamond sign showing a person walking across striped lines indicates:',
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/Pedestrian-crossing.png',
    options: [
      'Construction zone ahead',
      'Pedestrian crossing — exercise caution and reduce speed',
      'Public market nearby',
      'Parking area for pedestrians',
    ],
    correctAnswer: 'B',
    explanation:
      'A pedestrian crossing sign alerts drivers to slow down and prepare to stop, especially in busy pedestrian areas or near schools.',
    source: 'PH Road Signs Manual W11-2',
  },
  {
    id: 5,
    category: 'Road Signs',
    question:
      'A yellow diamond sign showing a car silhouette above two wavy skid marks warns drivers of:',
    image:
      'https://imgs.search.brave.com/HlYHVAaKI-2i_ouZFa1yEFdmHczbs8ISfjMlIDcweI0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvODU2/OTg4NDM0L3ZlY3Rv/ci9zbGlwcGVyeS1y/b2FkLXdhcm5pbmct/c2lnbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9SmlQbjZV/SHBPRkNwc3RFOW9z/eEVGaXE2NUFxSHlB/bTY4US1aa3U1MGpq/bz0',
    options: [
      'Vehicle service station ahead',
      'Road that may become slippery, especially when wet',
      'Sharp curve ahead',
      'Mandatory tire check zone',
    ],
    correctAnswer: 'B',
    explanation:
      'This warning sign indicates the road surface may become slippery, particularly after rain. Reduce speed, avoid sudden braking, and increase following distance.',
    source: 'PH Road Signs Manual W8-5',
  },
  {
    id: 6,
    category: 'Road Signs',
    question: "A white circular sign with a red border showing the number '60' means:",
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/Maximum-speed-limit-sign.png',
    options: [
      'Distance to next town in kilometers',
      'Minimum speed required is 60 km/h',
      'Maximum speed permitted is 60 km/h',
      'Highway route number',
    ],
    correctAnswer: 'C',
    explanation:
      'A speed limit sign (red-bordered white circle) shows the maximum allowed speed in km/h. Exceeding it is a violation. Minimum speed signs use a blue circular background — no red border.',
    source: 'PH Road Signs Manual R2-1',
  },
  {
    id: 7,
    category: 'Road Signs',
    question:
      "A black rectangular sign with the words 'ONE WAY' and a white directional arrow indicates:",
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/One-way-sign-618x1024.jpg',
    options: [
      'No entry from this direction',
      'Traffic flows only in the direction of the arrow on this road',
      'Detour ahead',
      'Mandatory turn allowed at this point',
    ],
    correctAnswer: 'B',
    explanation:
      'A ONE WAY sign indicates that traffic on the indicated road moves only in the direction of the arrow. Driving against the arrow is a violation.',
    source: 'PH Road Signs Manual R3-7',
  },
  {
    id: 8,
    category: 'Road Signs',
    question: 'A solid red circular sign with a horizontal white bar means:',
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/No-entry-sign-791x1024.jpg',
    options: [
      'Road closed for maintenance',
      'No entry — entry into this road is prohibited for all vehicles',
      'Yield to oncoming traffic',
      'Stop and give way',
    ],
    correctAnswer: 'B',
    explanation:
      'The No Entry sign — a red circle with a horizontal white bar — prohibits entry of vehicles into a road or area. Typically used at the exit end of one-way streets.',
    source: 'PH Road Signs Manual R3-3',
  },
  {
    id: 9,
    category: 'Road Signs',
    question:
      'A yellow diamond sign showing three curved arrows forming a circular pattern warns drivers of:',
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/Roundabout-or-rotunda.png',
    options: [
      'Pedestrian-only zone',
      'Roundabout or rotunda ahead',
      'Vehicle inspection point',
      'Tight U-turn permitted',
    ],
    correctAnswer: 'B',
    explanation:
      'This warning sign alerts drivers that a roundabout (rotunda) is ahead. Reduce speed and prepare to yield to traffic already in the roundabout.',
    source: 'PH Road Signs Manual W2-5',
  },
  {
    id: 10,
    category: 'Road Signs',
    question:
      'A white circular sign with a red border showing two cars side-by-side and a red diagonal slash means:',
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/No-overtaking-683x1024.png',
    options: [
      'No overtaking allowed at this section',
      'Two-way traffic ahead',
      'Lane reduction',
      'Parking for two vehicles only',
    ],
    correctAnswer: 'A',
    explanation:
      'The No Overtaking sign prohibits passing another vehicle in the indicated section. Typically posted on curves, hills, and sections with limited visibility.',
    source: 'PH Road Signs Manual R4-1',
  },
  {
    id: 11,
    category: 'Road Signs',
    question: 'A yellow diamond sign showing an arrow curving to the right warns drivers of:',
    image: 'https://media-blog.zutobi.com/wp-content/uploads/sites/2/2020/11/03121216/image-52.jpg',
    options: [
      'Right turn only ahead',
      'A road curve to the right ahead — reduce speed',
      'Exit ramp ahead',
      'Mandatory right turn',
    ],
    correctAnswer: 'B',
    explanation:
      'Yellow diamond signs are warnings. An arrow curving right warns of an approaching right-hand curve. Reduce speed BEFORE entering the curve, not during.',
    source: 'PH Road Signs Manual W1-2',
  },
  {
    id: 12,
    category: 'Road Signs',
    question: 'A yellow diamond sign showing two children figures walking indicates:',
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/School-children.png',
    options: [
      'Pedestrian-only zone',
      'School zone — reduce speed and be alert for children',
      'Playground ahead',
      "Children's hospital nearby",
    ],
    correctAnswer: 'B',
    explanation:
      'A school zone warning sign features children figures and alerts drivers to reduce speed and watch for children crossing. Maximum speed in school zones is 20 km/h under RA 4136.',
    source: 'PH Road Signs Manual W11-1; RA 4136 Sec. 35',
  },
  {
    id: 13,
    category: 'Road Signs',
    question: 'A solid white line on a road dividing traffic moving in the same direction means:',
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/Solid-white-center-line.jpg',
    options: [
      'You may change lanes freely',
      'Lane changing is discouraged but not prohibited',
      'Crossing the line is allowed only when overtaking',
      'Mandatory single-file driving',
    ],
    correctAnswer: 'B',
    explanation:
      'A solid white line separates lanes of traffic moving in the same direction and discourages lane changes. A broken white line indicates lane changes are permitted.',
    source: 'PH Road Signs and Pavement Markings Manual Sec. 4',
  },

  {
    id: 14,
    category: 'Road Signs',
    question: 'A solid yellow line on a two-way road means:',
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/Solid-yellow-lane-divider.jpg',
    options: [
      'Overtaking permitted with caution',
      'Overtaking is prohibited — do not cross the line',
      'Right of way for yellow vehicles',
      'Buses only',
    ],
    correctAnswer: 'B',
    explanation:
      'A solid yellow line separates opposing traffic and prohibits overtaking. A broken yellow line allows overtaking when safe.',
    source: 'PH Road Signs and Pavement Markings Manual Sec. 4.2',
  },
  {
    id: 15,
    category: 'Road Signs',
    question: 'A yellow diamond sign showing a truck silhouette on a downward slope means:',
    image:
      'https://imgs.search.brave.com/ybW3kU5N6T25SZbC_pauunTqVVZrwCJJvbQAjTrtOl4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3F1YXJlc2lnbnMu/Y29tL19uZXh0L2lt/YWdlP3VybD1odHRw/czovL2Nkbi5zcXVh/cmVzaWducy5jb20v/aW1hZ2VzL3RlbXBs/YXRlcy90aHVtYi9i/aWcvc3RlZXAtZG93/bmhpbGwtaW5jbGlu/ZS10cnVjay1zeW1i/b2wtdHJhZmZpYy1z/aWduLXRlbXBsYXRl/LnBuZyZ3PTE1MzYm/cT02MA',
    options: [
      'Truck route only',
      'Steep downgrade ahead — reduce speed and use lower gears',
      'Truck stop ahead',
      'Loading zone for trucks',
    ],
    correctAnswer: 'B',
    explanation:
      'This warning sign indicates a steep descending grade. Drivers — especially of heavy vehicles — should reduce speed, downshift, and avoid riding the brakes.',
    source: 'PH Road Signs Manual W7-1',
  },
  {
    id: 16,
    category: 'Road Signs',
    question:
      'A yellow diamond sign with two arrows pointing in opposite vertical directions indicates:',
    image:
      'https://imgs.search.brave.com/OyqJtif6spp6rRT5JmFrb770_Vy6qA5y5zp-J1Otseo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzgzLzMz/L2ZiLzgzMzNmYjQ4/NTZhYmE1NWUyYzli/MjljODQ3MDQ0MWE4/LmpwZw',
    options: [
      'Reversible lane',
      'Two-way traffic ahead — be alert for oncoming vehicles',
      'Heavy traffic area',
      'Steep upgrade and downgrade',
    ],
    correctAnswer: 'B',
    explanation:
      'This warning sign alerts drivers that a road ahead changes from one-way to two-way traffic. Be prepared for oncoming vehicles and stay in your lane.',
    source: 'PH Road Signs Manual W6-3',
  },
  {
    id: 17,
    category: 'Road Signs',
    question: 'A yellow diamond sign with a wavy line warns drivers of:',
    image:
      'https://imgs.search.brave.com/ogywFb2pWywqG3GsUlo5T3WVDO0JirNxwaQD3dMMAa4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pNS53/YWxtYXJ0aW1hZ2Vz/LmNvbS9hc3IvNGJm/YjJkZGYtYWE0OS00/NzRiLTkxN2EtMTAx/ZmExMmNiYmNkXzEu/ZjBmYTQ3N2JjMzg4/NWNkNjUzMWM0ODg1/NzVkZjMxOGMuanBl/Zz9vZG5XaWR0aD00/NTAmb2RuSGVpZ2h0/PTQ1MCZvZG5CZz1m/ZmZmZmY',
    options: [
      'Road repairs ahead',
      'Bumps, dips, or uneven road surface — reduce speed',
      'Slippery road surface',
      'Lane shift ahead',
    ],
    correctAnswer: 'B',
    explanation:
      'This sign warns of uneven pavement, bumps, or dips. Reduce speed to maintain control and avoid vehicle damage.',
    source: 'PH Road Signs Manual W8-1',
  },
  {
    id: 18,
    category: 'Road Signs',
    question: "A round yellow sign with a black X and the letters 'RR' warns of:",
    image:
      'https://imgs.search.brave.com/S7Yj7QYbmZMlvusXIUVGcKbjplttux4M1j-JrVoN8mo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zMy5h/bWF6b25hd3MuY29t/L2Nkbi5kbXYtcGVy/bWl0LXRlc3QuY29t/L2ltYWdlcy9yb2Fk/LXNpZ25zL21lZGl1/bS81OC5qcGc',
    options: [
      'Roundabout ahead',
      'Railroad crossing ahead — be prepared to stop',
      'Restricted road',
      'Right-of-way to railway vehicles only',
    ],
    correctAnswer: 'B',
    explanation:
      'The round yellow railroad crossing warning sign tells drivers a railway intersection is ahead. Slow down, look both ways, and stop if a train is approaching.',
    source: 'PH Road Signs Manual W10-1',
  },
  {
    id: 19,
    category: 'Road Signs',
    question:
      "A circular blue sign with a single red diagonal line through it (containing a white 'P') means:",
    image:
      'https://imgs.search.brave.com/yxiyADMv40h9ZPaulnBtsqal_tofgYFXsDaWeF01qSQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jbGlw/YXJ0LWxpYnJhcnku/Y29tL2ltYWdlcy84/VHg4RTdBR2MucG5n',
    options: ['No entry', 'No parking permitted', 'End of restriction', 'Caution'],
    correctAnswer: 'B',
    explanation:
      'The No Parking sign (blue circle with one red diagonal line) prohibits parking but permits brief stops for loading/unloading. The No Stopping sign uses two crossed red diagonal lines.',
    source: 'PH Road Signs Manual R5-1',
  },
  {
    id: 20,
    category: 'Road Signs',
    question: "A yellow diamond sign with the word 'SLOW' instructs drivers to:",
    image:
      'https://imgs.search.brave.com/2uy81I-crG3SYEK8azxItcIPaoylQ8QGaWTC7Mf1ld0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU0/MTgyMTg5Ny92ZWN0/b3Ivc2xvdy1yb2Fk/LXNpZ24uanBnP3M9/NjEyeDYxMiZ3PTAm/az0yMCZjPS1iNlZP/R2dwYm1zTTc1RVln/X1o5b2tUV1doakIz/WHBZbDJuOVBtY005/U2s9',
    options: [
      'Stop completely',
      'Reduce speed in preparation for a hazard or slower zone ahead',
      'Drive in the slow lane',
      'Move to the shoulder',
    ],
    correctAnswer: 'B',
    explanation:
      'A SLOW warning sign instructs drivers to reduce speed in anticipation of a hazard, intersection, or speed-restricted area ahead.',
    source: 'PH Road Signs Manual W12-1',
  },
  {
    id: 21,
    category: 'Road Signs',
    question: "A regulatory sign with the image of a bus and the words 'BUS ONLY' indicates:",
    image:
      'https://imgs.search.brave.com/Ac8y9Qvb_q7SPU7c6JdMRJVDBBJlYhI5K2HBlzFgADg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c2FmZXR5c2lnbi5j/b20vaW1hZ2VzL3Nv/dXJjZS9tZWRpdW0t/aW1hZ2VzL1c0OTY1/LnBuZw',
    options: [
      'Buses must stop at this lane',
      'This lane is reserved for buses only — private vehicles prohibited',
      'Bus stop ahead',
      'Buses use the right lane only',
    ],
    correctAnswer: 'B',
    explanation:
      'A bus-only lane sign reserves the lane for public buses. Private vehicles using a bus-only lane during posted hours commit a traffic violation.',
    source: 'PH Road Signs Manual R6-1',
  },
  {
    id: 22,
    category: 'Road Signs',
    question:
      'A circular blue sign showing a white arrow curving right (with no other arrows) means:',
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/All-traffic-sign-616x1024.jpg',
    options: [
      'Caution: right turn ahead',
      'Right turn only — drivers must turn right at the intersection',
      'Yield to vehicles turning right',
      'No right turn',
    ],
    correctAnswer: 'B',
    explanation:
      'A mandatory turn sign (blue circle with white arrow) requires drivers to follow the indicated direction.',
    source: 'PH Road Signs Manual R8-1',
  },
  {
    id: 23,
    category: 'Road Signs',
    question:
      'A circular white sign with a red border showing a left-curving arrow crossed by a red diagonal slash means:',
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/No-left-turn-615x1024.jpg',
    options: [
      'Left turn only on weekends',
      'No left turn permitted at this intersection',
      'Sharp curve to the left ahead',
      'Yield to vehicles turning left',
    ],
    correctAnswer: 'B',
    explanation:
      'This regulatory sign prohibits left turns at the indicated intersection. Drivers must continue straight or turn right where the sign is posted.',
    source: 'PH Road Signs Manual R3-1',
  },
  {
    id: 24,
    category: 'Road Signs',
    question: 'A yellow diamond sign showing a tunnel entrance warns drivers of:',
    image:
      'https://imgs.search.brave.com/yokY08YDf-UJJf2jNlQosm9W-am64gR05zWbusrPbFk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/dmVjdG9yc3RvY2su/Y29tL2kvNTAwcC81/MS85NC95ZWxsb3ct/dHJhZmZpYy13YXJu/aW5nLXNpZ24tb24t/dHJhbnNwYXJlbnQt/dmVjdG9yLTM3MDY1/MTk0LmpwZw',
    options: [
      'Tunnel ahead — turn on headlights and reduce speed',
      'Bridge ahead',
      'Lane reduction',
      'Underground parking',
    ],
    correctAnswer: 'A',
    explanation:
      'This warning sign alerts drivers to an approaching tunnel. Turn on headlights, remove sunglasses, and reduce speed before entering.',
    source: 'PH Road Signs Manual W9-1',
  },
  {
    id: 25,
    category: 'Road Signs',
    question: 'A yellow diamond sign showing rocks tumbling down warns drivers of:',
    image:
      'https://imgs.search.brave.com/nPChEcYtVYmnv2mSYs6w4EzWny7GXEEDAPAtzC_DN2E/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/c3F1YXJlc2lnbnMu/Y29tL2ltYWdlcy90/ZW1wbGF0ZXMvdGh1/bWIvbWVkaXVtL2Zh/bGxpbmctcm9ja3Mt/c2lnbi18LWluZGlj/YXRlcy1hbmQtd2Fy/bnMtYS1yaXNrLW9m/LWZhbGxpbmctcm9j/a3MucG5n',
    options: [
      'Construction zone',
      'Falling rocks or rockfall area — exercise caution',
      'Quarry ahead',
      'Mountain road ending',
    ],
    correctAnswer: 'B',
    explanation:
      'A falling rocks warning sign indicates a section of road where loose rocks may fall from adjacent slopes. Stay alert, avoid stopping under rocky overhangs.',
    source: 'PH Road Signs Manual W8-3',
  },
  {
    id: 26,
    category: 'Road Signs',
    question: "A blue square sign with a white 'H' indicates:",
    image:
      'https://imgs.search.brave.com/yGOW8nSp9ao3O3T1dw9cM8qhJfAqbIgX_PEb9fPFCd0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aWxnaXRyYWZpay5j/b20vaW1hZ2UvY2Fj/aGUvd3AvZ2ovYmls/Z2ktaXNhcmV0bGVy/aS1sZXZoYWxhcmkv/aGFzdGFuZS10YWJl/bGFzaS1iLTE1LWhh/c3RhbmUtdHJhZmlr/LWxldmhhc2ktbmVk/aXItYW5sYW1pLWJp/bGdpLWxldmhhc2kt/bmVkaXItdHJhZmlr/LWJpbGdpLXRhYmVs/YXNpLWJpbGdpLWlz/YXJldGktaWxnaS10/cmFmaWstc2lzdGVt/bGVyaS1pbWFsYXQt/dXJldGltLWZpeWF0/aS1iLTE1LXRhYmVs/YS0xMDAweDEwMDAu/d2VicA',
    options: [
      'Highway exit',
      'Hospital nearby — reduce noise and watch for emergency vehicles',
      'Heliport',
      'Hotel',
    ],
    correctAnswer: 'B',
    explanation:
      'A blue square with a white H indicates a hospital is nearby. Drivers should reduce noise (avoid horn use) and be alert for emergency vehicles.',
    source: 'PH Road Signs Manual, Service Signs',
  },
  {
    id: 27,
    category: 'Road Signs',
    question: 'A blue square sign showing a pedestrian on white horizontal stripes indicates:',
    image:
      'https://imgs.search.brave.com/dyteZFcegbG1Yv3b-Bu3nclgft4n89-iuimuDtEYeLY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTM0/NjUyMTE3MS92ZWN0/b3IvcGVkZXN0cmlh/bi1jcm9zc2luZy1y/b2FkLXNpZ24tdmVj/dG9yLWlsbHVzdHJh/dGlvbi5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9VENrOVVN/YlVQbVFtaG5sbFN4/NlVfSWZ1QVBiVExv/eXprQ2NLNUNZeEl6/Zz0',
    options: [
      'Pedestrian crossing — vehicles must give way',
      'Pedestrian-only zone',
      'Bus stop',
      'Sidewalk only',
    ],
    correctAnswer: 'A',
    explanation:
      'This is a regulatory sign indicating a marked pedestrian crossing. Drivers must yield to pedestrians using the crosswalk.',
    source: 'PH Road Signs Manual R7-1; RA 4136 Sec. 42(d)',
  },
  {
    id: 28,
    category: 'Road Signs',
    question: 'A circular white sign showing a number with diagonal black lines crossing it means:',
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/Speed-limit-derestriction-sign.png',
    options: [
      'Maximum speed at exactly that number',
      'Minimum speed',
      'End of the speed restriction shown',
      'Reduce to half that speed',
    ],
    correctAnswer: 'C',
    explanation:
      'A speed limit sign with diagonal lines crossing it means the previously posted speed restriction ends. Drivers may resume the default speed limit.',
    source: 'PH Road Signs Manual R2-5',
  },
  {
    id: 29,
    category: 'Road Signs',
    question:
      "A regulatory sign showing a vehicle being loaded with the text 'LOADING ZONE' indicates:",
    image:
      'https://ltoportal.ph/wp-content/uploads/2023/03/Loading-zone-xx_xx-AM-xx_xx-PM-180x300.jpg',
    options: [
      'Parking is permitted for loading/unloading only, usually time-limited',
      'Heavy vehicles only',
      'Cargo inspection zone',
      'Bus loading area',
    ],
    correctAnswer: 'A',
    explanation:
      'A loading zone sign designates an area where parking is permitted only for the purpose of loading or unloading, usually with a time limit posted.',
    source: 'LTO Traffic Management Guidelines',
  },
  {
    id: 30,
    category: 'Road Signs',
    question: 'A yellow diamond sign showing the silhouette of a deer or cattle warns drivers of:',
    image: 'https://ltoportal.ph/wp-content/uploads/2023/03/Animal-crossing.png',
    options: [
      'Petting zoo ahead',
      'Wildlife or livestock crossing — be alert for animals on the road',
      'Veterinary clinic nearby',
      'Farm vehicles only',
    ],
    correctAnswer: 'B',
    explanation:
      'This warning sign alerts drivers to areas where animals may cross the road. Reduce speed and be prepared to stop, especially at dawn and dusk.',
    source: 'PH Road Signs Manual W11-3',
  },
  {
    id: 31,
    category: 'Traffic Rules',
    question:
      'At an intersection without traffic signs or signals where two vehicles arrive at the same time, who has the right of way?',
    image: '',
    options: [
      'The larger vehicle',
      'The vehicle on the right',
      'The vehicle on the left',
      'Whichever vehicle accelerates first',
    ],
    correctAnswer: 'B',
    explanation:
      'At an uncontrolled intersection, the driver on the LEFT must yield to the vehicle on the RIGHT when both arrive at approximately the same time.',
    source: 'RA 4136 Sec. 42',
  },
  {
    id: 32,
    category: 'Traffic Rules',
    question:
      'Under RA 4136, what is the maximum speed for passenger cars on through streets or boulevards (clear, no blind corners) within populated areas?',
    image: '',
    options: ['20 km/h', '30 km/h', '40 km/h', '60 km/h'],
    correctAnswer: 'C',
    explanation:
      'RA 4136 Section 35 sets the maximum speed at 40 km/h for passenger cars and motorcycles on through streets or boulevards within populated areas. Trucks and buses are limited to 30 km/h.',
    source: 'RA 4136 Sec. 35',
  },
  {
    id: 33,
    category: 'Traffic Rules',
    question: 'How far before a turn must a driver signal his or her intention to turn?',
    image: '',
    options: [
      'Just before turning the steering wheel',
      'At least 30 meters before the turning point',
      'Only if other vehicles are visible behind',
      'Only when turning left',
    ],
    correctAnswer: 'B',
    explanation:
      'A driver must signal at least 30 meters before the turning point and continue signaling until the turn is completed.',
    source: 'RA 4136 Sec. 44',
  },
  {
    id: 34,
    category: 'Traffic Rules',
    question: 'Overtaking another vehicle is PROHIBITED in which situation?',
    image: '',
    options: [
      'On a straight, empty road during daylight',
      'When approaching the crest of a hill or a curve where the view is obstructed',
      'When the vehicle ahead is signaling a right turn',
      'When passing on a designated overtaking lane',
    ],
    correctAnswer: 'B',
    explanation:
      'Overtaking is prohibited when approaching the crest of a grade or curve with obstructed view, within 30m of intersections and pedestrian crossings, and at railway crossings.',
    source: 'RA 4136 Sec. 41',
  },
  {
    id: 35,
    category: 'Traffic Rules',
    question:
      'When approaching a school zone during school hours, the maximum speed for any vehicle is:',
    image: '',
    options: ['10 km/h', '20 km/h', '30 km/h', '40 km/h'],
    correctAnswer: 'B',
    explanation:
      'RA 4136 sets a maximum speed of 20 km/h when passing a school, hospital, or church zone during school hours or while children are present.',
    source: 'RA 4136 Sec. 35(b)',
  },
  {
    id: 36,
    category: 'Traffic Rules',
    question: 'A driver should use headlights:',
    image: '',
    options: [
      'Only on highways',
      'From half an hour after sunset until half an hour before sunrise, and during low visibility',
      'Only when other vehicles approach',
      'Only during rain',
    ],
    correctAnswer: 'B',
    explanation:
      'Headlights must be used from one-half hour after sunset until one-half hour before sunrise, and at any time when there is insufficient light to see clearly (fog, rain, dust).',
    source: 'RA 4136 Sec. 34',
  },
  {
    id: 37,
    category: 'Traffic Rules',
    question: 'When backing up a vehicle on a road, the driver must:',
    image: '',
    options: [
      'Honk continuously while backing',
      'Ensure the movement can be made safely without interfering with other traffic',
      'Have a passenger guide them',
      'Use only the right side mirror',
    ],
    correctAnswer: 'B',
    explanation:
      'A driver may not back a vehicle unless the movement can be made with reasonable safety and without interfering with other traffic.',
    source: 'RA 4136 Sec. 47',
  },
  {
    id: 38,
    category: 'Traffic Rules',
    question: 'Under what circumstance is overtaking on the RIGHT permitted on a Philippine road?',
    image: '',
    options: [
      'Whenever the road is wide enough',
      'Only when the vehicle ahead is signaling a left turn, or on a one-way road with multiple lanes',
      'Anytime on highways',
      'Never under any circumstance',
    ],
    correctAnswer: 'B',
    explanation:
      'Under RA 4136, overtaking on the right is generally prohibited but permitted when the vehicle ahead is making a left turn, or on a one-way road with sufficient lanes.',
    source: 'RA 4136 Sec. 41',
  },
  {
    id: 39,
    category: 'Traffic Rules',
    question: 'A yellow (amber) traffic light at an intersection means:',
    image: '',
    options: [
      'Speed up to cross before red',
      'Caution — prepare to stop unless already too close to the intersection to stop safely',
      'Drive normally',
      'Equivalent to a green light',
    ],
    correctAnswer: 'B',
    explanation:
      'A yellow light signals that the signal is about to turn red. Drivers should stop before entering the intersection if it is safe to do so.',
    source: 'RA 4136 Sec. 38; LTO Traffic Signal Regulations',
  },
  {
    id: 40,
    category: 'Traffic Rules',
    question:
      'At an intersection in the Philippines, can a driver turn right when the traffic light is red?',
    image: '',
    options: [
      'Yes, always, without stopping',
      "Only if a 'Right Turn on Red' sign is explicitly posted",
      'Yes, but must stop completely first',
      'No, right turns are never allowed on red',
    ],
    correctAnswer: 'B',
    explanation:
      "Right turn on red is NOT a default rule in the Philippines. It is permitted only at intersections where a 'Right Turn on Red' sign is explicitly posted, and only after a complete stop.",
    source: 'LTO Traffic Signal Regulations',
  },
  {
    id: 41,
    category: 'Traffic Rules',
    question:
      'When an emergency vehicle (ambulance, fire truck, police) approaches with siren and flashing lights, drivers must:',
    image: '',
    options: [
      'Maintain speed and lane',
      'Yield the right of way — pull to the right edge of the road and stop until it passes',
      'Move to the left lane',
      'Sound the horn in response',
    ],
    correctAnswer: 'B',
    explanation:
      'RA 4136 requires drivers to yield to emergency vehicles using sirens and flashing lights. Pull to the right edge of the road, stop, and remain stationary until it passes.',
    source: 'RA 4136 Sec. 49',
  },
  {
    id: 42,
    category: 'Traffic Rules',
    question:
      'When a pedestrian is using a marked crosswalk without a traffic signal, drivers approaching must:',
    image: '',
    options: [
      'Sound the horn to warn the pedestrian',
      'Yield the right of way and stop if necessary to let the pedestrian cross',
      'Maintain speed and pass behind the pedestrian',
      'Only stop if the pedestrian signals',
    ],
    correctAnswer: 'B',
    explanation:
      'Pedestrians using a marked crosswalk where no signal directs traffic have the right of way. Drivers must yield, slowing or stopping as needed.',
    source: 'RA 4136 Sec. 42(d)',
  },
  {
    id: 43,
    category: 'Traffic Rules',
    question: 'When changing lanes, a driver must:',
    image: '',
    options: [
      'Change lanes immediately if a gap is available',
      'Signal the intended lane change continuously until the change is completed',
      'Use hand signals only on highways',
      'Signal only when other vehicles are visible',
    ],
    correctAnswer: 'B',
    explanation:
      'Lane changes require continuous signaling from before the move until the change is completed, regardless of whether other vehicles are visible.',
    source: 'RA 4136 Sec. 44',
  },
  {
    id: 44,
    category: 'Traffic Rules',
    question:
      "When the vehicle's turn signal device is broken, the hand signal for a LEFT turn is:",
    image: '',
    options: [
      "Arm extended straight out the driver's window",
      'Arm bent upward at the elbow, hand pointing up',
      'Arm bent downward at the elbow, hand pointing down',
      'Arm waving in a circle',
    ],
    correctAnswer: 'A',
    explanation:
      "The hand signal for a left turn is the left arm extended horizontally straight out the driver's window.",
    source: 'RA 4136 Sec. 44',
  },
  {
    id: 45,
    category: 'Traffic Rules',
    question:
      "When the vehicle's turn signal device is broken, the hand signal for a RIGHT turn is:",
    image: '',
    options: [
      "Arm extended straight out the driver's window",
      'Left arm bent upward at the elbow, hand pointing up',
      'Left arm bent downward at the elbow, hand pointing down',
      'Right hand pointing through the windshield',
    ],
    correctAnswer: 'B',
    explanation:
      'The hand signal for a right turn is the left arm bent upward at the elbow with the hand pointing upward.',
    source: 'RA 4136 Sec. 44',
  },
  {
    id: 46,
    category: 'Traffic Rules',
    question: "When the vehicle's brake light is broken, the hand signal for STOP is:",
    image: '',
    options: [
      'Left arm extended horizontally',
      'Left arm bent downward at the elbow, hand pointing down',
      'Hand waving up and down out the window',
      'Right hand on the steering wheel',
    ],
    correctAnswer: 'B',
    explanation:
      'The hand signal for stopping or slowing is the left arm bent downward at the elbow with the hand pointing down.',
    source: 'RA 4136 Sec. 44',
  },
  {
    id: 47,
    category: 'Traffic Rules',
    question:
      'Under RA 11229 (Child Safety in Motor Vehicles Act), what is required for children below 12 years old in private vehicles?',
    image: '',
    options: [
      'Children are allowed in the front passenger seat',
      'Children below 12 must use appropriate child restraint systems and must not be in the front seat',
      'Only seatbelt use is required',
      'No restrictions apply',
    ],
    correctAnswer: 'B',
    explanation:
      'RA 11229 prohibits children below 12 from sitting in the front passenger seat of private vehicles and requires appropriate child restraint systems for younger children.',
    source: 'RA 11229 (Child Safety in Motor Vehicles Act)',
  },
  {
    id: 48,
    category: 'Traffic Rules',
    question:
      'Under RA 10913 (Anti-Distracted Driving Act), using a mobile phone while driving is:',
    image: '',
    options: [
      'Permitted only at low speeds',
      'Permitted with hands-free devices when the vehicle is moving',
      'Prohibited for handheld use; hands-free is allowed',
      'Always permitted',
    ],
    correctAnswer: 'C',
    explanation:
      'RA 10913 prohibits the use of handheld mobile phones, tablets, and other communication devices while driving. Hands-free devices are permitted as long as they do not impair driving.',
    source: 'RA 10913 (Anti-Distracted Driving Act)',
  },
  {
    id: 49,
    category: 'Traffic Rules',
    question:
      'Under Philippine motorcycle laws, how many passengers can a standard motorcycle legally carry in addition to the driver?',
    image: '',
    options: [
      'Two passengers maximum',
      'One back-rider only',
      'Up to three with helmet requirements',
      'Unlimited if all wear helmets',
    ],
    correctAnswer: 'B',
    explanation:
      'A standard motorcycle is limited to the driver plus one back-rider. Both must wear standard protective helmetsw per RA 10054.',
    source: 'RA 10054; LTO Memorandum Circulars',
  },
  {
    id: 50,
    category: 'Traffic Rules',
    question: "When may a driver use the vehicle's horn?",
    image: '',
    options: [
      'Anytime to express frustration',
      'Only to warn other road users of imminent danger or to alert pedestrians who may not see the vehicle',
      'Continuously in heavy traffic',
      'Only between sunrise and sunset',
    ],
    correctAnswer: 'B',
    explanation:
      'Horns are intended as warning devices. RA 4136 restricts horn use to legitimate safety warnings. Excessive use is prohibited, especially near hospitals and schools.',
    source: 'RA 4136 Sec. 51',
  },
  {
    id: 51,
    category: 'Traffic Rules',
    question:
      'Following another vehicle more closely than is reasonable and prudent (tailgating) is:',
    image: '',
    options: [
      'Permitted at low speeds',
      'A traffic violation under RA 4136',
      'Allowed only on highways',
      'Acceptable when the vehicle ahead is slow',
    ],
    correctAnswer: 'B',
    explanation:
      'Tailgating is a violation under RA 4136. The 3-second rule is the standard defensive measure for safe following distance.',
    source: 'RA 4136 Sec. 48',
  },
  {
    id: 52,
    category: 'Traffic Rules',
    question: "Driving with a revoked driver's license carries:",
    image: '',
    options: [
      'Same penalty as driving without a license',
      'Lesser penalty since they once had a license',
      'Heavier penalty than driving without a license, plus potential criminal charges',
      'Verbal warning',
    ],
    correctAnswer: 'C',
    explanation:
      'Driving with a revoked or suspended license carries heavier consequences than driving without one — substantial fines, additional demerit points, and potentially criminal charges.',
    source: 'RA 4136 Sec. 19; LTO Memorandum Circulars',
  },
  {
    id: 53,
    category: 'Penalties',
    question:
      'Under RA 10054 (Motorcycle Helmet Act), who is required to wear a standard protective motorcycle helmet?',
    image: '',
    options: [
      'Only the driver',
      'Only the back-rider',
      'Both the driver and the back-rider, at all times on a public road',
      'Both, but only on highways',
    ],
    correctAnswer: 'C',
    explanation:
      'RA 10054 requires both the motorcycle driver and any back-rider to wear a standard protective helmet compliant with the Philippine National Standard (PNS), at all times on public roads.',
    source: 'RA 10054 Sec. 3',
  },
  {
    id: 54,
    category: 'Penalties',
    question:
      'The consequence for driving without a valid license under current LTO rules includes:',
    image: '',
    options: [
      'Verbal warning only',
      'Immediate confiscation of the vehicle, no fine',
      'A fine, demerit points recorded against the registered owner, and possible additional penalties',
      'No penalty if the person is over 18 years old',
    ],
    correctAnswer: 'C',
    explanation:
      'Driving without a valid license results in a fine and is recorded against the registered owner. The 2026 demerit point system adds demerit points affecting future license validity.',
    source: 'RA 4136 Sec. 19; LTO JMC',
  },
  {
    id: 55,
    category: 'Penalties',
    question:
      'Under RA 10586 (Anti-Drunk and Drugged Driving Act), what is the legal BAC limit for a non-professional driver of a private vehicle?',
    image: '',
    options: [
      '0.00% BAC — zero tolerance',
      '0.05% blood alcohol concentration',
      '0.08% blood alcohol concentration',
      'No specific limit',
    ],
    correctAnswer: 'B',
    explanation:
      'RA 10586 sets a 0.05% BAC limit for non-professional drivers of private vehicles. Professional drivers and public utility/truck/bus operators are held to a zero-tolerance standard (0.00% BAC).',
    source: 'RA 10586 Sec. 5; IRR',
  },
  {
    id: 56,
    category: 'Penalties',
    question:
      'Under the Single Ticketing System, how many days does a driver have to settle a fine before additional consequences apply?',
    image: '',
    options: ['3 days', '7 days', '15 working days', '30 days'],
    correctAnswer: 'C',
    explanation:
      'Under the Single Ticketing System, a driver has 15 working days from the date of citation to settle the fine. Failure to settle triggers additional demerit points.',
    source: 'LTO JMC on Single Ticketing System',
  },
  {
    id: 57,
    category: 'Penalties',
    question:
      'Under RA 8750 (Seat Belts Use Act), who must wear a seatbelt while a private vehicle is in motion?',
    image: '',
    options: [
      'Only the driver',
      'The driver and the front-seat passenger',
      'The driver and all front-seat passengers',
      'Only on highways',
    ],
    correctAnswer: 'C',
    explanation:
      'RA 8750 requires the driver and all front-seat passengers to wear seatbelts while a private vehicle is in motion.',
    source: 'RA 8750 (Seat Belts Use Act of 1999)',
  },
  {
    id: 58,
    category: 'Penalties',
    question: "Under RA 4136, 'reckless driving' is best described as:",
    image: '',
    options: [
      'Driving slightly over the speed limit',
      'Driving without due regard for the safety of persons or property considering road, weather, and traffic conditions',
      'Any driving without a license',
      'Driving at night without headlights',
    ],
    correctAnswer: 'B',
    explanation:
      'Reckless driving under RA 4136 means operating a vehicle without due regard for safety, considering road type, weather, traffic density, and time of day. Significant penalties apply including license suspension.',
    source: 'RA 4136 Sec. 48',
  },
  {
    id: 59,
    category: 'Penalties',
    question: 'Beating a red traffic light typically results in:',
    image: '',
    options: [
      'Verbal warning',
      'Fine and demerit points; the violation is captured by traffic cameras in many areas',
      'Free pass if no other vehicle is present',
      'Optional payment',
    ],
    correctAnswer: 'B',
    explanation:
      'Running a red light is a serious traffic violation. Many intersections in Metro Manila use traffic cameras under the No-Contact Apprehension Policy (NCAP). The violation carries a fine plus demerit points.',
    source: 'LTO JMC; MMDA NCAP regulations',
  },
  {
    id: 60,
    category: 'Penalties',
    question: 'Speeding fines under the current LTO penalty matrix:',
    image: '',
    options: [
      'Are a single flat amount regardless of how much the speed limit was exceeded',
      'Scale with how much the posted speed limit was exceeded',
      'Only apply to drivers under 25 years old',
      'Depend on the vehicle color',
    ],
    correctAnswer: 'B',
    explanation:
      'Speeding fines under the current LTO matrix scale with how much the posted limit was exceeded — minor overage carries a smaller fine, while extreme overage carries substantially higher fines and additional demerit points.',
    source: 'LTO Penalty Matrix',
  },
  {
    id: 61,
    category: 'Penalties',
    question: 'Under RA 10913, repeated violations of the Anti-Distracted Driving Act result in:',
    image: '',
    options: [
      'No fine, only a warning',
      'Increasing fine amounts and license suspension for repeat offenders',
      'Fine on the first offense, then immediate revocation',
      'The same fine each time, no other consequences',
    ],
    correctAnswer: 'B',
    explanation:
      'RA 10913 establishes escalating penalties for repeat offenders, with fines increasing for second and third offenses. Repeated violations can trigger license suspension or revocation.',
    source: 'RA 10913',
  },
  {
    id: 62,
    category: 'Penalties',
    question:
      'A driver involved in a traffic accident who leaves the scene without rendering assistance or reporting commits:',
    image: '',
    options: [
      'A minor traffic violation',
      "A criminal offense ('hit and run') under RA 4136 and the Revised Penal Code",
      'An administrative offense only',
      'No offense if no one was injured',
    ],
    correctAnswer: 'B',
    explanation:
      'Leaving the scene of an accident is a criminal offense in the Philippines. Penalties include heavy fines, license revocation, and possible imprisonment depending on severity.',
    source: 'RA 4136 Sec. 55; Revised Penal Code',
  },
  {
    id: 63,
    category: 'Penalties',
    question: 'Under the No-Contact Apprehension Policy (NCAP), traffic violations are:',
    image: '',
    options: [
      'Always cited only with the driver physically present',
      "Captured by traffic cameras and the citation is sent to the vehicle's registered owner",
      'Only applicable to commercial vehicles',
      'Only for parking violations',
    ],
    correctAnswer: 'B',
    explanation:
      'NCAP uses traffic cameras to capture violations. The citation and fine are issued to the registered owner of the vehicle, even if a different person was driving.',
    source: 'LTO and LGU NCAP Implementing Regulations',
  },
  {
    id: 64,
    category: 'Penalties',
    question: 'License suspension under the demerit point system is typically triggered by:',
    image: '',
    options: [
      'One minor traffic violation',
      'Accumulating a defined number of demerit points within a specified period',
      'Any traffic ticket',
      'Failing to renew the license card',
    ],
    correctAnswer: 'B',
    explanation:
      'License suspension under the   system is triggered by accumulating demerit points beyond a defined threshold within a specified period.',
    source: 'LTO JMC Single Ticketing System',
  },
  {
    id: 65,
    category: 'Defensive Driving',
    question:
      'What is the minimum recommended following distance behind another vehicle on a dry road at normal speeds?',
    image: '',
    options: ['1 second', '3 seconds', '10 seconds', 'Half a car length'],
    correctAnswer: 'B',
    explanation:
      'The 3-second rule: when the vehicle ahead passes a fixed point, at least 3 seconds should pass before your vehicle reaches the same point. Increase to 4-6 seconds in rain, fog, or at night.',
    source: 'LTO Defensive Driving Curriculum; DO 2017-011',
  },
  {
    id: 66,
    category: 'Defensive Driving',
    question: 'If your vehicle begins to hydroplane on a wet road, what is the correct response?',
    image: '',
    options: [
      'Brake hard immediately to regain traction',
      'Ease off the accelerator, do not brake suddenly, keep the steering wheel straight',
      'Accelerate to push through the water',
      'Turn the wheel sharply to find dry pavement',
    ],
    correctAnswer: 'B',
    explanation:
      'When hydroplaning, tires lose contact with the road. Hard braking or sharp steering causes loss of control. Gently lift off the accelerator, hold the wheel firmly straight, and let the vehicle slow naturally.',
    source: 'LTO Defensive Driving Curriculum',
  },
  {
    id: 67,
    category: 'Defensive Driving',
    question: 'When approaching an intersection, a defensive driver should:',
    image: '',
    options: [
      'Maintain speed and trust the traffic signal',
      'Slow down, scan left-right-left, and be prepared to stop even with a green light',
      'Accelerate to clear the intersection quickly',
      'Sound the horn to warn other vehicles',
    ],
    correctAnswer: 'B',
    explanation:
      'Defensive driving requires scanning the intersection, reducing speed, and being prepared to stop even with right of way. Other drivers may run red lights or fail to yield.',
    source: 'LTO Defensive Driving Curriculum',
  },
  {
    id: 68,
    category: 'Defensive Driving',
    question: 'The defensive driving process known as SIPDE stands for:',
    image: '',
    options: [
      'Stop, Inspect, Plan, Drive, Exit',
      'Scan, Identify, Predict, Decide, Execute',
      'Slow, Inform, Park, Drive, Engage',
      'Stop, Inform, Pause, Detect, Engage',
    ],
    correctAnswer: 'B',
    explanation:
      'SIPDE: Scan the environment, Identify potential hazards, Predict how they might develop, Decide on a response, Execute the action.',
    source: 'LTO Defensive Driving Curriculum',
  },
  {
    id: 69,
    category: 'Defensive Driving',
    question: "A vehicle's 'blind spot' is:",
    image: '',
    options: [
      'The area in front of the vehicle blocked by the hood',
      'Areas around the vehicle that the driver cannot see in mirrors — typically just behind and to the side',
      'The area illuminated by the headlights at night',
      'The area covered by windshield wipers',
    ],
    correctAnswer: 'B',
    explanation:
      'Blind spots are areas not visible in the rear-view or side mirrors — typically just behind the driver and passenger doors. Drivers must check by turning their head before lane changes.',
    source: 'LTO Defensive Driving Curriculum',
  },
  {
    id: 70,
    category: 'Defensive Driving',
    question: 'One core principle of the Smith System for defensive driving is:',
    image: '',
    options: [
      'Drive as fast as legally allowed',
      'Aim high in steering — look far ahead, not just at the vehicle in front of you',
      'Use only the right lane on highways',
      'Never use mirrors',
    ],
    correctAnswer: 'B',
    explanation:
      "The Smith System teaches drivers to 'aim high in steering' — look far ahead (at least 15 seconds down the road) to anticipate hazards early.",
    source: 'LTO Defensive Driving Curriculum (Smith System)',
  },
  {
    id: 71,
    category: 'Defensive Driving',
    question: 'When driving at night, a safer practice is to:',
    image: '',
    options: [
      'Use high beams continuously',
      'Increase following distance and avoid looking directly at oncoming headlights',
      'Drive faster to clear roads sooner',
      'Turn off the radio',
    ],
    correctAnswer: 'B',
    explanation:
      'Night driving safety includes increasing following distance (4-6 seconds), avoiding direct gaze at oncoming headlights (look to the right edge), and using high beams only when no other traffic is present.',
    source: 'LTO Defensive Driving Curriculum',
  },
  {
    id: 72,
    category: 'Defensive Driving',
    question: 'If the rear wheels of your vehicle begin to skid sideways, the correct response is:',
    image: '',
    options: [
      'Brake hard immediately',
      'Steer in the direction the rear of the vehicle is sliding (steer into the skid) and ease off the accelerator',
      'Accelerate to straighten the vehicle',
      'Turn the steering wheel away from the skid',
    ],
    correctAnswer: 'B',
    explanation:
      'When the rear skids, steer into the skid (in the direction the rear is sliding) and gently release the accelerator. Hard braking or counter-steering typically worsens the skid.',
    source: 'LTO Defensive Driving Curriculum',
  },
  {
    id: 73,
    category: 'General & Republic Acts',
    question:
      "Before applying for a Non-Professional Driver's License, a Student Permit holder must:",
    image: '',
    options: [
      'Pay a registration fee only',
      'Hold a Student Permit for at least one month and complete both the Theoretical Driving Course (TDC) and Practical Driving Course (PDC)',
      'Pass only the written exam',
      'Own a vehicle registered in their name',
    ],
    correctAnswer: 'B',
    explanation:
      'Theoretical Driving Course (TDC) and Practical Driving Course (PDC) Under DO 2017-011, a Student Permit must be held for at least one month before applying for a Non-Pro License. The applicant must also complete the 15-hour TDC (online via LTMS) and the 7-hour PDC at an accredited driving school.',
    source: 'LTO Department Order 2017-011',
  },
  {
    id: 74,
    category: 'General & Republic Acts',
    question: "The 'Restriction Code' on a Philippine driver's license indicates:",
    image: '',
    options: [
      'The number of traffic violations',
      'The types and categories of vehicles the holder is authorized to drive',
      'The expiration date',
      'The license fee paid',
    ],
    correctAnswer: 'B',
    explanation:
      'Restriction Codes indicate which vehicle classifications the holder is authorized to drive — e.g., Code 1 for motorcycles, Code 2 for vehicles up to 4,500 kg, Code 3 for vehicles over 4,500 kg.',
    source: 'LTO Department Order 2017-011',
  },
  {
    id: 75,
    category: 'General & Republic Acts',
    question:
      "A Filipino driver's license issued today with a clean driving record has a maximum validity of:",
    image: '',
    options: ['1 year', '5 years', '10 years', '20 years'],
    correctAnswer: 'C',
    explanation:
      'Under current LTO rules, first-time holders and renewing drivers with clean records qualify for a 10-year license validity. Drivers with demerit accumulation receive 5-year validity instead.',
    source: "LTO Memorandum Circular on 10-Year Driver's License",
  },
]

/**
 * Shuffles the questions AND the options within each question.
 * Returns a new array where both order and option positions are randomized.
 */
export function getFullyRandomizedQuiz(): QuizQuestion[] {
  // 1. Shuffle the questions (copy first)
  const questions = [...quizQuestions].sort(() => Math.random() - 0.5)

  return questions.map((q) => {
    // 2. Pair options with their correctness status
    const optionsWithStatus = q.options.map((opt, index) => ({
      text: opt,
      isCorrect: String.fromCharCode(65 + index) === q.correctAnswer,
    }))

    // 3. Shuffle the options array
    const shuffledOptions = optionsWithStatus.sort(() => Math.random() - 0.5)

    // 4. Reconstruct the object
    return {
      ...q,
      options: shuffledOptions.map((o) => o.text),
      correctAnswer: String.fromCharCode(65 + shuffledOptions.findIndex((o) => o.isCorrect)),
    }
  })
}

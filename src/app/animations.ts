import {animate, style, transition, trigger} from "@angular/animations";

export const inOutAnimation = [
  trigger(
    'inOutAnimation',
    [
      transition(
        ':enter',
        [
          style({ height: 0, opacity: 0 }),
          animate('500ms ease-out',
            style({ 'height': 40, opacity: 1 }))
        ]
      ),
      transition(
        ':leave',
        [
          style({ 'height': 40, opacity: 1 }),
          animate('500ms ease-in',
            style({ height: 0, opacity: 0 }))
        ]
      )
    ]
  )
]

export const fadeInOutAnimation = [
  trigger('fadeInOutAnimation', [
    transition(':enter', [
      style({opacity:0}),
      animate(500, style({opacity:1}))
    ]),
    transition(':leave', [
      animate(500, style({opacity:0}))
    ])
  ])
]

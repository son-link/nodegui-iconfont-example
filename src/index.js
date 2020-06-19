const {
	QMainWindow,
	QWidget,
	QLabel,
	QScrollArea,
	QFontDatabase,
  QGridLayout,
  QBoxLayout,
  FlexLayout
} = require("@nodegui/nodegui");

/** Import the fonts to use */ 
const fontello = QFontDatabase.addApplicationFont('assets/fontello.ttf');
const awesome = QFontDatabase.addApplicationFont('assets/fa-brands-400.ttf');

const win = new QMainWindow();
win.setMinimumSize(500, 320);
win.setWindowTitle('NodeGUI Icon Font Example');

const rootView = new QWidget();
rootView.setLayout(new QBoxLayout(2));
rootView.setObjectName("rootView");
win.setCentralWidget(rootView);

const fontelloLabel = new QLabel();
fontelloLabel.setText('Fontello');
rootView.layout.addWidget(fontelloLabel);

const scrollArea_fontello = new QScrollArea();
const iconList_fontello = new QWidget();
iconList_fontello.setObjectName('fontello');
iconList_fontello.setLayout(new FlexLayout());
scrollArea_fontello.setWidget(iconList_fontello);
rootView.layout.addWidget(scrollArea_fontello);

const label1 = new QLabel();
label1.setText('\ue840');
iconList_fontello.layout.addWidget(label1);

const label2 = new QLabel();
label2.setText('\ue841');
iconList_fontello.layout.addWidget(label2);

const label3 = new QLabel();
label3.setText('\uf1d0');
iconList_fontello.layout.addWidget(label3);

const label4 = new QLabel();
label4.setText('\uf1d1');
iconList_fontello.layout.addWidget(label4);

const label5 = new QLabel();
label5.setText('\uf17c');
iconList_fontello.layout.addWidget(label5);

const label6 = new QLabel();
label6.setText('\uf09b');
iconList_fontello.layout.addWidget(label6);

const label7 = new QLabel();
label7.setText('\uf184');
iconList_fontello.layout.addWidget(label7);

const label8 = new QLabel();
label8.setText('\uf121');
iconList_fontello.layout.addWidget(label8);

// Example icons with Font Awesome 5

const awesomeLabel = new QLabel();
awesomeLabel.setText('Font Awesome 5');
rootView.layout.addWidget(awesomeLabel);

const scrollArea_awesome = new QScrollArea();
const iconList_awesome = new QWidget();
iconList_awesome.setObjectName('awesome');
iconList_awesome.setLayout(new FlexLayout());
scrollArea_awesome.setWidget(iconList_awesome);
rootView.layout.addWidget(scrollArea_awesome);

const label10 = new QLabel();
label10.setText('\uf269');
iconList_awesome.layout.addWidget(label10);

const label11 = new QLabel();
label11.setText('\uf38d');
iconList_awesome.layout.addWidget(label11);

const label12 = new QLabel();
label12.setText('\uf50c');
iconList_awesome.layout.addWidget(label12);

const label13 = new QLabel();
label13.setText('\uf50e');
iconList_awesome.layout.addWidget(label13);

const label14 = new QLabel();
label14.setText('\uf60f');
iconList_awesome.layout.addWidget(label14);

const label15 = new QLabel();
label15.setText('\uf419');
iconList_awesome.layout.addWidget(label15);

const label16 = new QLabel();
label16.setText('\uf3d3');
iconList_awesome.layout.addWidget(label16);

const label17 = new QLabel();
label17.setText('\uf7bb');
iconList_awesome.layout.addWidget(label17);

/**
 * To use the icons, we must indicate the font to use through CSS,
 * either this way or using the .setInlineStyle method of the object.
 */
const cssStyle = `
  #fontello,
  #awesome {
    align-items: flex-start;
  }

  #fontello > QLabel,
  #awesome > QLabel {
    font-size: 24px;
    padding: 5px;
  }

	#fontello > QLabel {
    font-family: "fontello";
  }
  
  #awesome > QLabel {
    font-family: 'Font Awesome 5 Brands';
	}
`;
win.setStyleSheet(cssStyle);
win.show();
global.win = win;

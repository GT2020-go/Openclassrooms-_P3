// Place fonts/icomoon.ttf in your fonts/ directory and
// add the following to your pubspec.yaml
// flutter:
//   fonts:
//    - family: icomoon
//      fonts:
//       - asset: fonts/icomoon.ttf
import 'package:flutter/widgets.dart';

class Icomoon {
  Icomoon._();

  static const String _fontFamily = 'icomoon';

  static const IconData menu2left = IconData(0x25e4, fontFamily: _fontFamily);
  static const IconData menu2right = IconData(0x25e5, fontFamily: _fontFamily);
}

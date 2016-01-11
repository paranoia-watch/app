"use strict";

Alloy.Globals.deviceWidth = (OS_IOS) ? Ti.Platform.displayCaps.platformWidth : Ti.Platform.displayCaps.platformWidth / Ti.Platform.displayCaps.logicalDensityFactor;
Alloy.Globals.deviceHeight = (OS_IOS) ? Ti.Platform.displayCaps.platformHeight : Ti.Platform.displayCaps.platformHeight / Ti.Platform.displayCaps.logicalDensityFactor;
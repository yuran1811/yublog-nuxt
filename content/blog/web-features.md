---
title: 7+ web features you may not know
description: 7+ web features you may not know, amazing web features you may not know
author: yuran1811
date: 2024-02-05T16:37:34Z
tags:
  - web
image: /cover-imgs/pwa-logo.png
seo:
  title: 7+ web features you may not know
  description: 7+ web features you may not know, amazing web features you may not know
---

## 1. Link sharing

```js
export const sharingHandle = () => {
  document.querySelector('#share').onclick = async () => {
    const shareData = {
      url: 'https://scorie.vercel.app',
      title: 'PWAs are awesome',
      text: 'Visit my other PWA: ',
    };

    if (!('share' in navigator) || !navigator.canShare(shareData)) {
      alert('Web Share API is not compatible || Cannot share the data');
      return;
    }

    try {
      await navigator.share(shareData);
      alert('Content shared!');
    } catch (error) {
      alert('Content was not shared by the user');
    }
  };
};
```

## 2. Device Motion

```js
export const deviceMotionHandle = () => {
  'navigator' in window &&
    navigator.geolocation.getCurrentPosition(console.log);

  addEventListener('devicemotion', (e) => {
    const output = document.querySelector('#motion');

    output.innerHTML = `
<div>
  Acceleration: ${Math.round(((e?.acceleration?.x || 0) + Number.EPSILON) * 100) / 100} m/s2
</div>
<div class="w-full">
  <span>X: ${+(e?.acceleration?.x || 0).toFixed(2)}</span>
  <span>Y: ${+(e?.acceleration?.y || 0).toFixed(2)}</span>
  <span>Z: ${+(e?.acceleration?.z || 0).toFixed(2)}</span>
</div>
<div>
  <span>Alpha: ${+(e?.rotationRate?.alpha || 0).toFixed(2)}</span>
  <span>Beta: ${+(e?.rotationRate?.beta || 0).toFixed(2)}</span>
  <span>Gamma: ${+(e?.rotationRate?.gamma || 0).toFixed(2)}</span>
</div>`;
  });
};
```

## 3. Bluetooth Detection

```js
export const bluetoothHandle = () => {
  document
    .querySelector('#ble')
    .addEventListener('click', () => connectBluetooth());

  const connectBluetooth = async () => {
    if (!('navigator' in window)) return;

    // Connect Device
    const device = await navigator.bluetooth.requestDevice({
      filters: [
        {
          services: ['heart_rate'],
        },
      ],
    });
    const server = await device.gatt.connect();

    // Get heart rate data
    const hr = await server.getPrimaryService('heart_rate');
    const hrMeasurement = await hr.getCharacteristic('heart_rate_measurement');

    // Listen to changes on device
    await hrMeasurement.startNotifications();

    hrMeasurement.addEventListener('characteristicvaluechanged', (e) => {
      console.log(parseHeartRate(e.target.value));
    });
  };

  const parseHeartRate = (initialValue) => {
    // In Chrome 50+, a DataView is returned instead of an ArrayBuffer.
    const value = initialValue.buffer
      ? initialValue
      : new DataView(initialValue);
    const flags = value.getUint8(0);

    const rate16Bits = flags & 0x1;
    const contactDetected = flags & 0x2;
    const contactSensorPresent = flags & 0x4;
    const energyPresent = flags & 0x8;
    const rrIntervalPresent = flags & 0x10;

    const result = {};

    let index = 1;

    result.heartRate = value.getUint16(index, !!rate16Bits);
    index += 1 + +!!rate16Bits;

    contactSensorPresent && (result.contactDetected = !!contactDetected);

    if (energyPresent) {
      result.energyExpended = value.getUint16(index, true);
      index += 2;
    }

    if (rrIntervalPresent) {
      const rrIntervals = [];
      for (; index + 1 < value.byteLength; index += 2) {
        rrIntervals.push(value.getUint16(index, true));
      }
      result.rrIntervals = rrIntervals;
    }

    return result;
  };
};
```

## 4. Contact Picker

```js
const props = ['name', 'email', 'tel', 'address', 'icon'];
const opts = { multiple: true };
const supported = 'contacts' in navigator && 'ContactsManager' in window;

export const contactPickerHandle = () => {
  const getContacts = async () => {
    if (!supported) return;

    const contacts = await navigator.contacts.select(props, opts);
    console.log(contacts);
  };

  const button = document.querySelector('#contacts');
  button.addEventListener('click', getContacts);
};
```

## 5. File System

```js
export const fileSystemHandle = () => {
  const getFileBtn = document.querySelector('#fs-get');
  const saveFileBtn = document.querySelector('#fs-save');

  getFileBtn.onclick = async () => {
    const [handle] = await window.showOpenFilePicker();
    const file = await handle.getFile();

    console.log(file);
  };

  saveFileBtn.onclick = async () => {
    const textFile = new File(['hello world'], 'hello.txt', {
      type: 'text/plain',
    });
    const handle = await window.showSaveFilePicker();
    const writable = await handle.createWritable();

    await writable.write(textFile);
    await writable.close();
  };
};
```

## 6. Idle Detection

```js
export const idleDetectionHandle = () => {
  if (!('IdleDetector' in window)) return;

  const idleBtn = document.querySelector('#idle');
  const idleStatus = document.querySelector('#idle-status');

  const runIdleDetection = async () => {
    // @ts-ignore
    await IdleDetector.requestPermission();
    // @ts-ignore
    const idleDetector = new IdleDetector();

    idleDetector.addEventListener('change', () => {
      const { userState, screenState } = idleDetector;

      idleStatus && (idleStatus.innerHTML = userState + ' ' + screenState);

      if (userState == 'idle') {
        // update database with status
        console.log(userState);
      }
    });

    await idleDetector.start({ threshold: 120000 });
  };

  idleBtn.addEventListener('click', () => runIdleDetection());
};
```

## 7. Geolocation

```js
const geoOptions = {
  timeout: 10 * 1000,
  enableHighAccuracy: true,
  maximumAge: 0,
};

window.navigator.geolocation.getCurrentPosition(
  (position) => {
    const cords = position.coords;
    console.log(`Latitude :  ${cords.latitude}`);
    console.log(`Longitude :  ${cords.longitude}`);
  },
  (error) => {
    console.debug(`Error: ${error.code}:${error.message}`);
    /**
     * Invoke the IP based location services
     * to fetch the latitude and longitude of the user.
     */
  },
  geoOptions,
);
```

## And more ...

### Thanks for reading !

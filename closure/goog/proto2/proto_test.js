// Copyright 2008 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

goog.module('goog.proto2.messageTest');
goog.setTestOnly();

const FieldDescriptor = goog.require('goog.proto2.FieldDescriptor');
const TestAllTypes = goog.require('proto2.TestAllTypes');
const TestDefaultParent = goog.require('proto2.TestDefaultParent');
const TestPackageTypes = goog.require('someprotopackage.TestPackageTypes');
const testSuite = goog.require('goog.testing.testSuite');

testSuite({
  testPackage() {
    const message = new TestPackageTypes();
    message.setOptionalInt32(45);
    message.setOtherAll(new TestAllTypes());
  },

  testFields() {
    const message = new TestAllTypes();

    // Ensure that the fields are not set.
    assertFalse(message.hasOptionalInt32());
    assertFalse(message.hasOptionalInt64());
    assertFalse(message.hasOptionalUint32());
    assertFalse(message.hasOptionalUint64());
    assertFalse(message.hasOptionalSint32());
    assertFalse(message.hasOptionalSint64());
    assertFalse(message.hasOptionalFixed32());
    assertFalse(message.hasOptionalFixed64());
    assertFalse(message.hasOptionalSfixed32());
    assertFalse(message.hasOptionalSfixed64());
    assertFalse(message.hasOptionalFloat());
    assertFalse(message.hasOptionalDouble());
    assertFalse(message.hasOptionalBool());
    assertFalse(message.hasOptionalString());
    assertFalse(message.hasOptionalBytes());
    assertFalse(message.hasOptionalgroup());
    assertFalse(message.hasOptionalNestedMessage());
    assertFalse(message.hasOptionalNestedEnum());

    // Check non-set values.
    assertNull(message.getOptionalInt32());
    assertNull(message.getOptionalInt64());
    assertNull(message.getOptionalFloat());
    assertNull(message.getOptionalString());
    assertNull(message.getOptionalBytes());
    assertNull(message.getOptionalNestedMessage());
    assertNull(message.getOptionalNestedEnum());

    // Check default values.
    assertEquals(0, message.getOptionalInt32OrDefault());
    assertEquals('1', message.getOptionalInt64OrDefault());
    assertEquals(1.5, message.getOptionalFloatOrDefault());
    assertEquals('', message.getOptionalStringOrDefault());
    assertEquals('moo', message.getOptionalBytesOrDefault());

    // Set the fields.
    message.setOptionalInt32(101);
    message.setOptionalInt64('102');
    message.setOptionalUint32(103);
    message.setOptionalUint64('104');
    message.setOptionalSint32(105);
    message.setOptionalSint64('106');
    message.setOptionalFixed32(107);
    message.setOptionalFixed64('108');
    message.setOptionalSfixed32(109);
    message.setOptionalSfixed64('110');
    message.setOptionalFloat(111.5);
    message.setOptionalDouble(112.5);
    message.setOptionalBool(true);
    message.setOptionalString('test');
    message.setOptionalBytes('abcd');

    const group = new TestAllTypes.OptionalGroup();
    group.setA(111);

    message.setOptionalgroup(group);

    const nestedMessage = new TestAllTypes.NestedMessage();
    nestedMessage.setB(112);

    message.setOptionalNestedMessage(nestedMessage);

    message.setOptionalNestedEnum(TestAllTypes.NestedEnum.FOO);

    // Ensure that the fields are set.
    assertTrue(message.hasOptionalInt32());
    assertTrue(message.hasOptionalInt64());
    assertTrue(message.hasOptionalUint32());
    assertTrue(message.hasOptionalUint64());
    assertTrue(message.hasOptionalSint32());
    assertTrue(message.hasOptionalSint64());
    assertTrue(message.hasOptionalFixed32());
    assertTrue(message.hasOptionalFixed64());
    assertTrue(message.hasOptionalSfixed32());
    assertTrue(message.hasOptionalSfixed64());
    assertTrue(message.hasOptionalFloat());
    assertTrue(message.hasOptionalDouble());
    assertTrue(message.hasOptionalBool());
    assertTrue(message.hasOptionalString());
    assertTrue(message.hasOptionalBytes());
    assertTrue(message.hasOptionalgroup());
    assertTrue(message.hasOptionalNestedMessage());
    assertTrue(message.hasOptionalNestedEnum());

    // Ensure that there is a count of 1 for each of the fields.
    assertEquals(1, message.optionalInt32Count());
    assertEquals(1, message.optionalInt64Count());
    assertEquals(1, message.optionalUint32Count());
    assertEquals(1, message.optionalUint64Count());
    assertEquals(1, message.optionalSint32Count());
    assertEquals(1, message.optionalSint64Count());
    assertEquals(1, message.optionalFixed32Count());
    assertEquals(1, message.optionalFixed64Count());
    assertEquals(1, message.optionalSfixed32Count());
    assertEquals(1, message.optionalSfixed64Count());
    assertEquals(1, message.optionalFloatCount());
    assertEquals(1, message.optionalDoubleCount());
    assertEquals(1, message.optionalBoolCount());
    assertEquals(1, message.optionalStringCount());
    assertEquals(1, message.optionalBytesCount());
    assertEquals(1, message.optionalgroupCount());
    assertEquals(1, message.optionalNestedMessageCount());
    assertEquals(1, message.optionalNestedEnumCount());

    // Ensure that the fields have the values expected.
    assertEquals(101, message.getOptionalInt32());
    assertEquals('102', message.getOptionalInt64());
    assertEquals(103, message.getOptionalUint32());
    assertEquals('104', message.getOptionalUint64());
    assertEquals(105, message.getOptionalSint32());
    assertEquals('106', message.getOptionalSint64());
    assertEquals(107, message.getOptionalFixed32());
    assertEquals('108', message.getOptionalFixed64());
    assertEquals(109, message.getOptionalSfixed32());
    assertEquals('110', message.getOptionalSfixed64());
    assertEquals(111.5, message.getOptionalFloat());
    assertEquals(112.5, message.getOptionalDouble());
    assertEquals(true, message.getOptionalBool());
    assertEquals('test', message.getOptionalString());
    assertEquals('abcd', message.getOptionalBytes());
    assertEquals(group, message.getOptionalgroup());
    assertEquals(nestedMessage, message.getOptionalNestedMessage());
    assertEquals(TestAllTypes.NestedEnum.FOO, message.getOptionalNestedEnum());
  },

  testRepeated() {
    const message = new TestAllTypes();

    // Ensure that the fields are not set.
    assertFalse(message.hasRepeatedInt32());
    assertFalse(message.hasRepeatedInt64());
    assertFalse(message.hasRepeatedUint32());
    assertFalse(message.hasRepeatedUint64());
    assertFalse(message.hasRepeatedSint32());
    assertFalse(message.hasRepeatedSint64());
    assertFalse(message.hasRepeatedFixed32());
    assertFalse(message.hasRepeatedFixed64());
    assertFalse(message.hasRepeatedSfixed32());
    assertFalse(message.hasRepeatedSfixed64());
    assertFalse(message.hasRepeatedFloat());
    assertFalse(message.hasRepeatedDouble());
    assertFalse(message.hasRepeatedBool());
    assertFalse(message.hasRepeatedString());
    assertFalse(message.hasRepeatedBytes());
    assertFalse(message.hasRepeatedgroup());
    assertFalse(message.hasRepeatedNestedMessage());
    assertFalse(message.hasRepeatedNestedEnum());

    // Expect the arrays to be empty.
    assertEquals(0, message.repeatedInt32Array().length);
    assertEquals(0, message.repeatedInt64Array().length);
    assertEquals(0, message.repeatedUint32Array().length);
    assertEquals(0, message.repeatedUint64Array().length);
    assertEquals(0, message.repeatedSint32Array().length);
    assertEquals(0, message.repeatedSint64Array().length);
    assertEquals(0, message.repeatedFixed32Array().length);
    assertEquals(0, message.repeatedFixed64Array().length);
    assertEquals(0, message.repeatedSfixed32Array().length);
    assertEquals(0, message.repeatedSfixed64Array().length);
    assertEquals(0, message.repeatedFloatArray().length);
    assertEquals(0, message.repeatedDoubleArray().length);
    assertEquals(0, message.repeatedBoolArray().length);
    assertEquals(0, message.repeatedStringArray().length);
    assertEquals(0, message.repeatedBytesArray().length);
    assertEquals(0, message.repeatedgroupArray().length);
    assertEquals(0, message.repeatedNestedMessageArray().length);
    assertEquals(0, message.repeatedNestedEnumArray().length);

    // Set the fields.
    message.addRepeatedInt32(101);
    message.addRepeatedInt64('102');
    message.addRepeatedUint32(103);
    message.addRepeatedUint64('104');
    message.addRepeatedSint32(105);
    message.addRepeatedSint64('106');
    message.addRepeatedFixed32(107);
    message.addRepeatedFixed64('108');
    message.addRepeatedSfixed32(109);
    message.addRepeatedSfixed64('110');
    message.addRepeatedFloat(111.5);
    message.addRepeatedDouble(112.5);
    message.addRepeatedBool(true);
    message.addRepeatedString('test');
    message.addRepeatedBytes('abcd');

    message.addRepeatedInt32(201);
    message.addRepeatedInt64('202');
    message.addRepeatedUint32(203);
    message.addRepeatedUint64('204');
    message.addRepeatedSint32(205);
    message.addRepeatedSint64('206');
    message.addRepeatedFixed32(207);
    message.addRepeatedFixed64('208');
    message.addRepeatedSfixed32(209);
    message.addRepeatedSfixed64('210');
    message.addRepeatedFloat(211.5);
    message.addRepeatedDouble(212.5);
    message.addRepeatedBool(true);
    message.addRepeatedString('test#2');
    message.addRepeatedBytes('efgh');

    const group1 = new TestAllTypes.RepeatedGroup();
    group1.addA(111);

    message.addRepeatedgroup(group1);

    const group2 = new TestAllTypes.RepeatedGroup();
    group2.addA(211);

    message.addRepeatedgroup(group2);

    const nestedMessage1 = new TestAllTypes.NestedMessage();
    nestedMessage1.setB(112);
    message.addRepeatedNestedMessage(nestedMessage1);

    const nestedMessage2 = new TestAllTypes.NestedMessage();
    nestedMessage2.setB(212);
    message.addRepeatedNestedMessage(nestedMessage2);

    message.addRepeatedNestedEnum(TestAllTypes.NestedEnum.FOO);
    message.addRepeatedNestedEnum(TestAllTypes.NestedEnum.BAR);

    // Ensure that the fields are set.
    assertTrue(message.hasRepeatedInt32());
    assertTrue(message.hasRepeatedInt64());
    assertTrue(message.hasRepeatedUint32());
    assertTrue(message.hasRepeatedUint64());
    assertTrue(message.hasRepeatedSint32());
    assertTrue(message.hasRepeatedSint64());
    assertTrue(message.hasRepeatedFixed32());
    assertTrue(message.hasRepeatedFixed64());
    assertTrue(message.hasRepeatedSfixed32());
    assertTrue(message.hasRepeatedSfixed64());
    assertTrue(message.hasRepeatedFloat());
    assertTrue(message.hasRepeatedDouble());
    assertTrue(message.hasRepeatedBool());
    assertTrue(message.hasRepeatedString());
    assertTrue(message.hasRepeatedBytes());
    assertTrue(message.hasRepeatedgroup());
    assertTrue(message.hasRepeatedNestedMessage());
    assertTrue(message.hasRepeatedNestedEnum());

    // Ensure that there is a count of 2 for each of the fields.
    assertEquals(2, message.repeatedInt32Count());
    assertEquals(2, message.repeatedInt64Count());
    assertEquals(2, message.repeatedUint32Count());
    assertEquals(2, message.repeatedUint64Count());
    assertEquals(2, message.repeatedSint32Count());
    assertEquals(2, message.repeatedSint64Count());
    assertEquals(2, message.repeatedFixed32Count());
    assertEquals(2, message.repeatedFixed64Count());
    assertEquals(2, message.repeatedSfixed32Count());
    assertEquals(2, message.repeatedSfixed64Count());
    assertEquals(2, message.repeatedFloatCount());
    assertEquals(2, message.repeatedDoubleCount());
    assertEquals(2, message.repeatedBoolCount());
    assertEquals(2, message.repeatedStringCount());
    assertEquals(2, message.repeatedBytesCount());
    assertEquals(2, message.repeatedgroupCount());
    assertEquals(2, message.repeatedNestedMessageCount());
    assertEquals(2, message.repeatedNestedEnumCount());

    // Ensure that the fields have the values expected.
    assertEquals(101, message.getRepeatedInt32(0));
    assertEquals('102', message.getRepeatedInt64(0));
    assertEquals(103, message.getRepeatedUint32(0));
    assertEquals('104', message.getRepeatedUint64(0));
    assertEquals(105, message.getRepeatedSint32(0));
    assertEquals('106', message.getRepeatedSint64(0));
    assertEquals(107, message.getRepeatedFixed32(0));
    assertEquals('108', message.getRepeatedFixed64(0));
    assertEquals(109, message.getRepeatedSfixed32(0));
    assertEquals('110', message.getRepeatedSfixed64(0));
    assertEquals(111.5, message.getRepeatedFloat(0));
    assertEquals(112.5, message.getRepeatedDouble(0));
    assertEquals(true, message.getRepeatedBool(0));
    assertEquals('test', message.getRepeatedString(0));
    assertEquals('abcd', message.getRepeatedBytes(0));
    assertEquals(group1, message.getRepeatedgroup(0));
    assertEquals(nestedMessage1, message.getRepeatedNestedMessage(0));
    assertEquals(TestAllTypes.NestedEnum.FOO, message.getRepeatedNestedEnum(0));

    assertEquals(201, message.getRepeatedInt32(1));
    assertEquals('202', message.getRepeatedInt64(1));
    assertEquals(203, message.getRepeatedUint32(1));
    assertEquals('204', message.getRepeatedUint64(1));
    assertEquals(205, message.getRepeatedSint32(1));
    assertEquals('206', message.getRepeatedSint64(1));
    assertEquals(207, message.getRepeatedFixed32(1));
    assertEquals('208', message.getRepeatedFixed64(1));
    assertEquals(209, message.getRepeatedSfixed32(1));
    assertEquals('210', message.getRepeatedSfixed64(1));
    assertEquals(211.5, message.getRepeatedFloat(1));
    assertEquals(212.5, message.getRepeatedDouble(1));
    assertEquals(true, message.getRepeatedBool(1));
    assertEquals('test#2', message.getRepeatedString(1));
    assertEquals('efgh', message.getRepeatedBytes(1));
    assertEquals(group2, message.getRepeatedgroup(1));
    assertEquals(nestedMessage2, message.getRepeatedNestedMessage(1));
    assertEquals(TestAllTypes.NestedEnum.BAR, message.getRepeatedNestedEnum(1));

    // Check the array lengths.
    assertEquals(2, message.repeatedInt32Array().length);
    assertEquals(2, message.repeatedInt64Array().length);
    assertEquals(2, message.repeatedUint32Array().length);
    assertEquals(2, message.repeatedUint64Array().length);
    assertEquals(2, message.repeatedSint32Array().length);
    assertEquals(2, message.repeatedSint64Array().length);
    assertEquals(2, message.repeatedFixed32Array().length);
    assertEquals(2, message.repeatedFixed64Array().length);
    assertEquals(2, message.repeatedSfixed32Array().length);
    assertEquals(2, message.repeatedSfixed64Array().length);
    assertEquals(2, message.repeatedFloatArray().length);
    assertEquals(2, message.repeatedDoubleArray().length);
    assertEquals(2, message.repeatedBoolArray().length);
    assertEquals(2, message.repeatedStringArray().length);
    assertEquals(2, message.repeatedBytesArray().length);
    assertEquals(2, message.repeatedgroupArray().length);
    assertEquals(2, message.repeatedNestedMessageArray().length);
    assertEquals(2, message.repeatedNestedEnumArray().length);

    // Check the array values.
    assertEquals(message.getRepeatedInt32(0), message.repeatedInt32Array()[0]);
    assertEquals(message.getRepeatedInt64(0), message.repeatedInt64Array()[0]);
    assertEquals(
        message.getRepeatedUint32(0), message.repeatedUint32Array()[0]);
    assertEquals(
        message.getRepeatedUint64(0), message.repeatedUint64Array()[0]);
    assertEquals(
        message.getRepeatedSint32(0), message.repeatedSint32Array()[0]);
    assertEquals(
        message.getRepeatedSint64(0), message.repeatedSint64Array()[0]);
    assertEquals(
        message.getRepeatedFixed32(0), message.repeatedFixed32Array()[0]);
    assertEquals(
        message.getRepeatedFixed64(0), message.repeatedFixed64Array()[0]);
    assertEquals(
        message.getRepeatedSfixed32(0), message.repeatedSfixed32Array()[0]);
    assertEquals(
        message.getRepeatedSfixed64(0), message.repeatedSfixed64Array()[0]);
    assertEquals(message.getRepeatedFloat(0), message.repeatedFloatArray()[0]);
    assertEquals(
        message.getRepeatedDouble(0), message.repeatedDoubleArray()[0]);
    assertEquals(message.getRepeatedBool(0), message.repeatedBoolArray()[0]);
    assertEquals(
        message.getRepeatedString(0), message.repeatedStringArray()[0]);
    assertEquals(message.getRepeatedBytes(0), message.repeatedBytesArray()[0]);
    assertEquals(message.getRepeatedgroup(0), message.repeatedgroupArray()[0]);
    assertEquals(
        message.getRepeatedNestedMessage(0),
        message.repeatedNestedMessageArray()[0]);
    assertEquals(
        message.getRepeatedNestedEnum(0), message.repeatedNestedEnumArray()[0]);

    assertEquals(message.getRepeatedInt32(1), message.repeatedInt32Array()[1]);
    assertEquals(message.getRepeatedInt64(1), message.repeatedInt64Array()[1]);
    assertEquals(
        message.getRepeatedUint32(1), message.repeatedUint32Array()[1]);
    assertEquals(
        message.getRepeatedUint64(1), message.repeatedUint64Array()[1]);
    assertEquals(
        message.getRepeatedSint32(1), message.repeatedSint32Array()[1]);
    assertEquals(
        message.getRepeatedSint64(1), message.repeatedSint64Array()[1]);
    assertEquals(
        message.getRepeatedFixed32(1), message.repeatedFixed32Array()[1]);
    assertEquals(
        message.getRepeatedFixed64(1), message.repeatedFixed64Array()[1]);
    assertEquals(
        message.getRepeatedSfixed32(1), message.repeatedSfixed32Array()[1]);
    assertEquals(
        message.getRepeatedSfixed64(1), message.repeatedSfixed64Array()[1]);
    assertEquals(message.getRepeatedFloat(1), message.repeatedFloatArray()[1]);
    assertEquals(
        message.getRepeatedDouble(1), message.repeatedDoubleArray()[1]);
    assertEquals(message.getRepeatedBool(1), message.repeatedBoolArray()[1]);
    assertEquals(
        message.getRepeatedString(1), message.repeatedStringArray()[1]);
    assertEquals(message.getRepeatedBytes(1), message.repeatedBytesArray()[1]);
    assertEquals(message.getRepeatedgroup(1), message.repeatedgroupArray()[1]);
    assertEquals(
        message.getRepeatedNestedMessage(1),
        message.repeatedNestedMessageArray()[1]);
    assertEquals(
        message.getRepeatedNestedEnum(1), message.repeatedNestedEnumArray()[1]);
  },

  testDescriptor() {
    const message = new TestAllTypes();
    const descriptor = message.getDescriptor();

    assertEquals('TestAllTypes', descriptor.getName());
    assertEquals('TestAllTypes', descriptor.getFullName());
    assertEquals(null, descriptor.getContainingType());

    const nestedMessage = new TestAllTypes.NestedMessage();
    const nestedDescriptor = nestedMessage.getDescriptor();

    assertEquals('NestedMessage', nestedDescriptor.getName());
    assertEquals('TestAllTypes.NestedMessage', nestedDescriptor.getFullName());
    assertEquals(descriptor, nestedDescriptor.getContainingType());
  },

  testFieldDescriptor() {
    const message = new TestAllTypes();
    const descriptor = message.getDescriptor();
    const fields = descriptor.getFields();

    assertEquals(53, fields.length);

    // Check the containing types.
    for (let i = 0; i < fields.length; ++i) {
      assertEquals(descriptor, fields[i].getContainingType());
    }

    // Check the field names.
    assertEquals('optional_int32', fields[0].getName());
    assertEquals('optional_int64', fields[1].getName());
    assertEquals('optional_uint32', fields[2].getName());
    assertEquals('optional_uint64', fields[3].getName());
    assertEquals('optional_sint32', fields[4].getName());
    assertEquals('optional_sint64', fields[5].getName());
    assertEquals('optional_fixed32', fields[6].getName());
    assertEquals('optional_fixed64', fields[7].getName());
    assertEquals('optional_sfixed32', fields[8].getName());
    assertEquals('optional_sfixed64', fields[9].getName());
    assertEquals('optional_float', fields[10].getName());
    assertEquals('optional_double', fields[11].getName());
    assertEquals('optional_bool', fields[12].getName());
    assertEquals('optional_string', fields[13].getName());
    assertEquals('optional_bytes', fields[14].getName());
    assertEquals('optionalgroup', fields[15].getName());
    assertEquals('optional_nested_message', fields[16].getName());
    assertEquals('optional_nested_enum', fields[17].getName());

    assertEquals('repeated_int32', fields[18].getName());
    assertEquals('repeated_int64', fields[19].getName());
    assertEquals('repeated_uint32', fields[20].getName());
    assertEquals('repeated_uint64', fields[21].getName());
    assertEquals('repeated_sint32', fields[22].getName());
    assertEquals('repeated_sint64', fields[23].getName());
    assertEquals('repeated_fixed32', fields[24].getName());
    assertEquals('repeated_fixed64', fields[25].getName());
    assertEquals('repeated_sfixed32', fields[26].getName());
    assertEquals('repeated_sfixed64', fields[27].getName());
    assertEquals('repeated_float', fields[28].getName());
    assertEquals('repeated_double', fields[29].getName());
    assertEquals('repeated_bool', fields[30].getName());
    assertEquals('repeated_string', fields[31].getName());
    assertEquals('repeated_bytes', fields[32].getName());
    assertEquals('repeatedgroup', fields[33].getName());
    assertEquals('repeated_nested_message', fields[34].getName());
    assertEquals('repeated_nested_enum', fields[35].getName());

    assertEquals('optional_int64_number', fields[36].getName());
    assertEquals('optional_int64_string', fields[37].getName());
    assertEquals('repeated_int64_number', fields[38].getName());
    assertEquals('repeated_int64_string', fields[39].getName());

    assertEquals('packed_int32', fields[40].getName());
    assertEquals('packed_int64', fields[41].getName());
    assertEquals('packed_uint32', fields[42].getName());
    assertEquals('packed_uint64', fields[43].getName());
    assertEquals('packed_sint32', fields[44].getName());
    assertEquals('packed_sint64', fields[45].getName());
    assertEquals('packed_fixed32', fields[46].getName());
    assertEquals('packed_fixed64', fields[47].getName());
    assertEquals('packed_sfixed32', fields[48].getName());
    assertEquals('packed_sfixed64', fields[49].getName());
    assertEquals('packed_float', fields[50].getName());
    assertEquals('packed_double', fields[51].getName());
    assertEquals('packed_bool', fields[52].getName());

    // Check the field types.
    const FieldType = FieldDescriptor.FieldType;
    assertEquals(FieldType.INT32, fields[0].getFieldType());
    assertEquals(FieldType.INT64, fields[1].getFieldType());
    assertEquals(FieldType.UINT32, fields[2].getFieldType());
    assertEquals(FieldType.UINT64, fields[3].getFieldType());
    assertEquals(FieldType.SINT32, fields[4].getFieldType());
    assertEquals(FieldType.SINT64, fields[5].getFieldType());
    assertEquals(FieldType.FIXED32, fields[6].getFieldType());
    assertEquals(FieldType.FIXED64, fields[7].getFieldType());
    assertEquals(FieldType.SFIXED32, fields[8].getFieldType());
    assertEquals(FieldType.SFIXED64, fields[9].getFieldType());
    assertEquals(FieldType.FLOAT, fields[10].getFieldType());
    assertEquals(FieldType.DOUBLE, fields[11].getFieldType());
    assertEquals(FieldType.BOOL, fields[12].getFieldType());
    assertEquals(FieldType.STRING, fields[13].getFieldType());
    assertEquals(FieldType.BYTES, fields[14].getFieldType());
    assertEquals(FieldType.GROUP, fields[15].getFieldType());
    assertEquals(FieldType.MESSAGE, fields[16].getFieldType());
    assertEquals(FieldType.ENUM, fields[17].getFieldType());

    assertEquals(FieldType.INT32, fields[18].getFieldType());
    assertEquals(FieldType.INT64, fields[19].getFieldType());
    assertEquals(FieldType.UINT32, fields[20].getFieldType());
    assertEquals(FieldType.UINT64, fields[21].getFieldType());
    assertEquals(FieldType.SINT32, fields[22].getFieldType());
    assertEquals(FieldType.SINT64, fields[23].getFieldType());
    assertEquals(FieldType.FIXED32, fields[24].getFieldType());
    assertEquals(FieldType.FIXED64, fields[25].getFieldType());
    assertEquals(FieldType.SFIXED32, fields[26].getFieldType());
    assertEquals(FieldType.SFIXED64, fields[27].getFieldType());
    assertEquals(FieldType.FLOAT, fields[28].getFieldType());
    assertEquals(FieldType.DOUBLE, fields[29].getFieldType());
    assertEquals(FieldType.BOOL, fields[30].getFieldType());
    assertEquals(FieldType.STRING, fields[31].getFieldType());
    assertEquals(FieldType.BYTES, fields[32].getFieldType());
    assertEquals(FieldType.GROUP, fields[33].getFieldType());
    assertEquals(FieldType.MESSAGE, fields[34].getFieldType());
    assertEquals(FieldType.ENUM, fields[35].getFieldType());

    assertEquals(FieldType.INT64, fields[36].getFieldType());
    assertEquals(FieldType.INT64, fields[37].getFieldType());
    assertEquals(FieldType.INT64, fields[38].getFieldType());
    assertEquals(FieldType.INT64, fields[39].getFieldType());

    assertEquals(FieldType.INT32, fields[40].getFieldType());
    assertEquals(FieldType.INT64, fields[41].getFieldType());
    assertEquals(FieldType.UINT32, fields[42].getFieldType());
    assertEquals(FieldType.UINT64, fields[43].getFieldType());
    assertEquals(FieldType.SINT32, fields[44].getFieldType());
    assertEquals(FieldType.SINT64, fields[45].getFieldType());
    assertEquals(FieldType.FIXED32, fields[46].getFieldType());
    assertEquals(FieldType.FIXED64, fields[47].getFieldType());
    assertEquals(FieldType.SFIXED32, fields[48].getFieldType());
    assertEquals(FieldType.SFIXED64, fields[49].getFieldType());
    assertEquals(FieldType.FLOAT, fields[50].getFieldType());
    assertEquals(FieldType.DOUBLE, fields[51].getFieldType());
    assertEquals(FieldType.BOOL, fields[52].getFieldType());

    // Check the field native types.
    // Singular.
    assertEquals(Number, fields[0].getNativeType());
    assertEquals(
        String, fields[1].getNativeType());  // 64 bit values are strings.
    assertEquals(Number, fields[2].getNativeType());
    assertEquals(String, fields[3].getNativeType());
    assertEquals(Number, fields[4].getNativeType());
    assertEquals(String, fields[5].getNativeType());
    assertEquals(Number, fields[6].getNativeType());
    assertEquals(String, fields[7].getNativeType());
    assertEquals(Number, fields[8].getNativeType());
    assertEquals(String, fields[9].getNativeType());
    assertEquals(Number, fields[10].getNativeType());
    assertEquals(Number, fields[11].getNativeType());

    assertEquals(Boolean, fields[12].getNativeType());

    assertEquals(String, fields[13].getNativeType());
    assertEquals(String, fields[14].getNativeType());

    assertEquals(TestAllTypes.OptionalGroup, fields[15].getNativeType());
    assertEquals(TestAllTypes.NestedMessage, fields[16].getNativeType());
    assertEquals(TestAllTypes.NestedEnum, fields[17].getNativeType());

    assertEquals(Number, fields[36].getNativeType());  // [jstype="number"]
    assertEquals(String, fields[37].getNativeType());

    // Repeated.
    assertEquals(Number, fields[18].getNativeType());
    assertEquals(String, fields[19].getNativeType());
    assertEquals(Number, fields[20].getNativeType());
    assertEquals(String, fields[21].getNativeType());
    assertEquals(Number, fields[22].getNativeType());
    assertEquals(String, fields[23].getNativeType());
    assertEquals(Number, fields[24].getNativeType());
    assertEquals(String, fields[25].getNativeType());
    assertEquals(Number, fields[26].getNativeType());
    assertEquals(String, fields[27].getNativeType());
    assertEquals(Number, fields[28].getNativeType());
    assertEquals(Number, fields[29].getNativeType());

    assertEquals(Boolean, fields[30].getNativeType());

    assertEquals(String, fields[31].getNativeType());
    assertEquals(String, fields[32].getNativeType());

    assertEquals(TestAllTypes.RepeatedGroup, fields[33].getNativeType());
    assertEquals(TestAllTypes.NestedMessage, fields[34].getNativeType());
    assertEquals(TestAllTypes.NestedEnum, fields[35].getNativeType());

    assertEquals(Number, fields[38].getNativeType());  // [jstype="number"]
    assertEquals(String, fields[39].getNativeType());

    // Packed (only numeric types can be packed).
    assertEquals(Number, fields[40].getNativeType());
    assertEquals(Number, fields[41].getNativeType());
    assertEquals(Number, fields[42].getNativeType());
    assertEquals(Number, fields[43].getNativeType());
    assertEquals(Number, fields[44].getNativeType());
    assertEquals(Number, fields[45].getNativeType());
    assertEquals(Number, fields[46].getNativeType());
    assertEquals(Number, fields[47].getNativeType());
    assertEquals(Number, fields[48].getNativeType());
    assertEquals(Number, fields[49].getNativeType());
    assertEquals(Number, fields[50].getNativeType());
    assertEquals(Number, fields[51].getNativeType());
    assertEquals(Boolean, fields[52].getNativeType());
  },

  testUnknown() {
    const message = new TestAllTypes();

    // Set some unknown fields.
    message.setUnknown(1000, 101);
    message.setUnknown(1001, -102);
    message.setUnknown(1002, true);
    message.setUnknown(1003, 'abcd');
    message.setUnknown(1004, ['he', 'llo']);

    // Ensure we find them all.
    let count = 0;

    message.forEachUnknown((tag, value) => {
      if (tag == 1000) {
        assertEquals(101, value);
      }

      if (tag == 1001) {
        assertEquals(-102, value);
      }

      if (tag == 1002) {
        assertEquals(true, value);
      }

      if (tag == 1003) {
        assertEquals('abcd', value);
      }

      if (tag == 1004) {
        assertEquals('he', value[0]);
        assertEquals('llo', value[1]);
      }

      count++;
    });

    assertEquals(5, count);
  },

  testReflection() {
    const message = new TestAllTypes();
    const descriptor = message.getDescriptor();
    const optionalInt = descriptor.findFieldByName('optional_int32');
    const optionalString = descriptor.findFieldByName('optional_string');
    const repeatedInt64 = descriptor.findFieldByName('repeated_int64');
    const optionalWrong = descriptor.findFieldByName('foo_bar');

    assertFalse(optionalInt == null);
    assertFalse(optionalString == null);
    assertFalse(repeatedInt64 == null);
    assertTrue(optionalWrong == null);

    // Check to ensure the fields are empty.
    assertFalse(message.has(optionalInt));
    assertFalse(message.has(optionalString));
    assertFalse(message.has(repeatedInt64));

    assertEquals(0, message.arrayOf(repeatedInt64).length);

    // Check default values.
    assertEquals(0, message.getOrDefault(optionalInt));
    assertEquals('', message.getOrDefault(optionalString));

    // Set some of the fields.
    message.set(optionalString, 'hello!');

    message.add(repeatedInt64, '101');
    message.add(repeatedInt64, '102');

    // Check the fields.
    assertFalse(message.has(optionalInt));

    assertTrue(message.has(optionalString));
    assertTrue(message.hasOptionalString());

    assertTrue(message.has(repeatedInt64));
    assertTrue(message.hasRepeatedInt64());

    // Check the values.
    assertEquals('hello!', message.get(optionalString));
    assertEquals('hello!', message.getOptionalString());

    assertEquals('101', message.get(repeatedInt64, 0));
    assertEquals('102', message.get(repeatedInt64, 1));

    assertEquals('101', message.getRepeatedInt64(0));
    assertEquals('102', message.getRepeatedInt64(1));

    // Check the count.
    assertEquals(0, message.countOf(optionalInt));

    assertEquals(1, message.countOf(optionalString));
    assertEquals(1, message.optionalStringCount());

    assertEquals(2, message.countOf(repeatedInt64));
    assertEquals(2, message.repeatedInt64Count());

    // Check the array.
    assertEquals(2, message.arrayOf(repeatedInt64).length);

    assertEquals(
        message.get(repeatedInt64, 0), message.arrayOf(repeatedInt64)[0]);

    assertEquals(
        message.get(repeatedInt64, 1), message.arrayOf(repeatedInt64)[1]);
  },

  testDefaultValuesForMessages() {
    const message = new TestDefaultParent();
    // Ideally this object would be immutable, but the current API does not
    // enforce that behavior, so get**OrDefault returns a new instance every
    // time.
    const child = message.getChildOrDefault();
    child.setFoo(false);
    // Changing the value returned by get**OrDefault does not actually change
    // the value stored in the parent message.
    assertFalse(message.hasChild());
    assertNull(message.getChild());

    const message2 = new TestDefaultParent();
    const child2 = message2.getChildOrDefault();
    assertNull(message2.getChild());

    // The parent message returns a different object for the default.
    assertNotEquals(child, child2);

    // You've only changed the value of child, so child2 should be unaffected.
    assertFalse(child2.hasFoo());
    assertTrue(child2.getFooOrDefault());
  },
});

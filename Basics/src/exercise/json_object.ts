type Primitive = boolean | null | number | string;
type JSONArray = JSONValue[];
type JSONObject = { [k: string]: JSONValue }
type JSONValue = Primitive | JSONArray | JSONObject;

let json: JSONValue = [1, 2, 3, 4];

// @ts-expect-error
json = () => { }

// @ts-expect-error
json = class { }

// @ts-expect-error
json = new bigint(143);


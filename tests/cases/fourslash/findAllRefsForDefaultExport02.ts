/// <reference path='fourslash.ts'/>

////export default function [|{| "isWriteAccess": true, "isDefinition": true |}DefaultExportedFunction|]() {
////    return [|DefaultExportedFunction|];
////}
////
////var x: typeof [|DefaultExportedFunction|];
////
////var y = [|DefaultExportedFunction|]();
////
////namespace [|{| "isWriteAccess": true, "isDefinition": true |}DefaultExportedFunction|] {
////}


const ranges = test.ranges();
const [r0, r1, r2, r3, r4] = ranges;
const fnRanges = [r0, r1, r2, r3];
verify.referenceGroups(fnRanges, [{ definition: "function DefaultExportedFunction(): () => typeof DefaultExportedFunction", ranges: fnRanges }]);

// The namespace and function do not merge,
// so the namespace should be all alone.
verify.referenceGroups(r4, [{ definition: "namespace DefaultExportedFunction", ranges: [r4] }]);

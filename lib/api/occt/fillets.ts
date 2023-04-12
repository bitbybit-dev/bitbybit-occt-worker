import * as Inputs from 'bitbybit-occt/lib/api/inputs/inputs';
import { OCCTWorkerManager } from '../../occ-worker/occ-worker-manager';


export class OCCTFillets {

    constructor(
        private readonly occWorkerManager: OCCTWorkerManager,
    ) {
    }
    /**
    * Fillets OpenCascade Shapes
    * @param inputs Shape, radius and edge indexes to fillet
    * @returns OpenCascade shape with filleted edges
    * @group 3d
    * @shortname fillet
    * @drawable true
    */
    filletEdges(inputs: Inputs.OCCT.FilletDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('fillets.filletEdges', inputs);
    }

    /**
    * Fillets OpenCascade 3d wire, this algorithm takes one guiding direction for fillets to be formed. It does not respect tangent directions on each filleted corner.
    * @param inputs Shape, radius and edge indexes to fillet
    * @returns OpenCascade shape with filleted edges
    * @group 3d
    * @shortname fillet wire
    * @drawable true
    */
    fillet3DWire(inputs: Inputs.OCCT.Fillet3DWireDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('fillets.fillet3DWire', inputs);
    }

    /**
     * Chamfer OpenCascade Shape edges
     * @param inputs Shape, distance and edge indexes to chamfer
     * @returns OpenCascade shape with chamfered edges
     * @group 3d
     * @shortname chamfer
    * @drawable true
     */
    chamferEdges(inputs: Inputs.OCCT.ChamferDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('fillets.chamferEdges', inputs);
    }

    /**
     * Fillets 2d wires or faces
     * @param inputs Shape
     * @returns OpenCascade filleted shape result
     * @group 2d
     * @shortname fillet
     * @drawable true
     */
    fillet2d(inputs: Inputs.OCCT.FilletDto<Inputs.OCCT.TopoDSWirePointer | Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.OCCT.TopoDSWirePointer | Inputs.OCCT.TopoDSFacePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('fillets.fillet2d', inputs);
    }

    /**
     * Fillets two planar edges into a wire by providing a radius, plane, edges and possible solution index if more than one result exists
     * @param inputs Definition for fillets
     * @returns OpenCascade wire shape if solution is found
     * @group 2d
     * @shortname fillet 2 edges
     * @drawable true
     */
    filletTwoEdgesInPlaneIntoAWire(inputs: Inputs.OCCT.FilletTwoEdgesInPlaneDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        inputs.shapes = [inputs.edge1, inputs.edge2];
        return this.occWorkerManager.genericCallToWorkerPromise('fillets.filletTwoEdgesInPlaneIntoAWire', inputs);

    }
}

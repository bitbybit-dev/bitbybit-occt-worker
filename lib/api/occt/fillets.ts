import { Inputs } from "@bitbybit-dev/occt";
import { OCCTWorkerManager } from "../../occ-worker/occ-worker-manager";


export class OCCTFillets {

    constructor(
        private readonly occWorkerManager: OCCTWorkerManager,
    ) {
    }
    /**
    * Fillets OpenCascade Shapes
    * @param inputs Shape, radius and edge indexes to fillet
    * @returns OpenCascade shape with filleted edges
    * @group 3d fillets
    * @shortname fillet edges
    * @drawable true
    */
    filletEdges(inputs: Inputs.OCCT.FilletDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise("fillets.filletEdges", inputs);
    }

    /**
    * Fillets edges list with different radius on each edge.
    * @param inputs Shape, edges and radius list
    * @returns OpenCascade shape with filleted edges
    * @group 3d fillets
    * @shortname fillet edges list
    * @drawable true
    */
    filletEdgesList(inputs: Inputs.OCCT.FilletEdgesListDto<Inputs.OCCT.TopoDSShapePointer, Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise("fillets.filletEdgesList", inputs);
    }

    /**
    * Fillets edges list with the single radius on all edges.
    * @param inputs Shape, edges and radius
    * @returns OpenCascade shape with filleted edges
    * @group 3d fillets
    * @shortname fillet edges list one r
    * @drawable true
    */
    filletEdgesListOneRadius(inputs: Inputs.OCCT.FilletEdgesListOneRadiusDto<Inputs.OCCT.TopoDSShapePointer, Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise("fillets.filletEdgesListOneRadius", inputs);
    }

    /**
    * Fillets a single edge with variable radius list on given u params. You need to provide a list of params to identify on which U param to apply the radius on.
    * @param inputs Shape, edge, radius list and param list
    * @returns OpenCascade shape with filleted edges
    * @group 3d fillets
    * @shortname fillet edge variable r
    * @drawable true
    */
    filletEdgeVariableRadius(inputs: Inputs.OCCT.FilletEdgeVariableRadiusDto<Inputs.OCCT.TopoDSShapePointer, Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise("fillets.filletEdgeVariableRadius", inputs);
    }

    /**
    * Fillets multiple provided edges with the same variable radiuses on u params for each edge.
    * @param inputs Shape, edge, radius list and param list
    * @returns OpenCascade shape with filleted edges
    * @group 3d fillets
    * @shortname fillet edges same variable r
    * @drawable true
    */
    filletEdgesSameVariableRadius(inputs: Inputs.OCCT.FilletEdgesSameVariableRadiusDto<Inputs.OCCT.TopoDSShapePointer, Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise("fillets.filletEdgesSameVariableRadius", inputs);
    }

    /**
    * Fillets multiple provided edges with variable radius lists on given params lists. You need to provide a list of params to identify on which U param to apply the radius on.
    * @param inputs Shape, edge, radius list and param list
    * @returns OpenCascade shape with filleted edges
    * @group 3d fillets
    * @shortname fillet edges variable r
    * @drawable true
    */
    filletEdgesVariableRadius(inputs: Inputs.OCCT.FilletEdgesVariableRadiusDto<Inputs.OCCT.TopoDSShapePointer, Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise("fillets.filletEdgesVariableRadius", inputs);
    }

    /**
    * Fillets OpenCascade 3d wire, this algorithm takes one guiding direction for fillets to be formed. 
    * It does not respect tangent directions on each filleted corner. This algorithm is based on extruding wire along the given direction
    * to form a shell, then filleting the shell and finally extracting the filleted wire from the shell itself.
    * Make sure you provide a direction that is not parallel to the wire and that forms high enough extrusion for the fillet to succeed.
    * @param inputs Shape, radius and edge indexes to fillet
    * @returns OpenCascade shape with filleted edges
    * @group 3d fillets
    * @shortname fillet 3d wire
    * @drawable true
    */
    fillet3DWire(inputs: Inputs.OCCT.Fillet3DWireDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise("fillets.fillet3DWire", inputs);
    }

    /**
     * Chamfer OpenCascade Shape edges
     * @param inputs Shape, distance and edge indexes to chamfer
     * @returns OpenCascade shape with chamfered edges
     * @group 3d chamfers
     * @shortname chamfer edges
    * @drawable true
     */
    chamferEdges(inputs: Inputs.OCCT.ChamferDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise("fillets.chamferEdges", inputs);
    }

    /**
     * Fillets 2d wires or faces
     * @param inputs Shape
     * @returns OpenCascade filleted shape result
     * @group 2d fillets
     * @shortname fillet 2d wire or face
     * @drawable true
     */
    fillet2d(inputs: Inputs.OCCT.FilletDto<Inputs.OCCT.TopoDSWirePointer | Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise("fillets.fillet2d", inputs);
    }

    /**
     * Fillets two planar edges into a wire by providing a radius, plane, edges and possible solution index if more than one result exists
     * @param inputs Definition for fillets
     * @returns OpenCascade wire shape if solution is found
     * @group 2d fillets
     * @shortname fillet 2 edges
     * @drawable true
     */
    filletTwoEdgesInPlaneIntoAWire(inputs: Inputs.OCCT.FilletTwoEdgesInPlaneDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise("fillets.filletTwoEdgesInPlaneIntoAWire", inputs);

    }
}

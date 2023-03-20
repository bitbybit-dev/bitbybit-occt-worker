import { OCCTWorkerManager } from '../../occ-worker/occ-worker-manager';
import { OCCTShapes } from './shapes/shapes';
import { OCCTTransforms } from './transforms';
import { OCCTOperations } from './operations';
import { OCCTBooleans } from './booleans';
import { OCCTIO } from './io';
import { OCCTGeom } from './geom/geom';
import { OCCTAssembly } from './assembly/assembly';
import { OCCTFillets } from './fillets';
import * as Inputs from 'bitbybit-occt/lib/api/inputs/inputs';

/**
 * Contains various methods for OpenCascade implementation
 */
export class OCCT {
    public readonly shapes: OCCTShapes;
    public readonly geom: OCCTGeom;
    public readonly assembly: OCCTAssembly;
    public readonly fillets: OCCTFillets;
    public readonly transforms: OCCTTransforms;
    public readonly operations: OCCTOperations;
    public readonly booleans: OCCTBooleans;
    public io: OCCTIO;

    constructor(
        public readonly occWorkerManager: OCCTWorkerManager,
    ) {
        this.shapes = new OCCTShapes(occWorkerManager);
        this.geom = new OCCTGeom(occWorkerManager);
        this.assembly = new OCCTAssembly(occWorkerManager);
        this.transforms = new OCCTTransforms(occWorkerManager);
        this.operations = new OCCTOperations(occWorkerManager);
        this.booleans = new OCCTBooleans(occWorkerManager);
        this.fillets = new OCCTFillets(occWorkerManager);
        this.io = new OCCTIO(occWorkerManager);
    }

    /**
     * Creates mesh from the shape
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapeToMesh.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt.OCCT.html#shapeToMesh
     * @param inputs shape
     * @group drawing
     * @shortname shape to mesh
     * @drawable false
     */
    async shapeToMesh(inputs: Inputs.OCCT.ShapeToMeshDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.DecomposedMeshDto> {
        return await this.occWorkerManager.genericCallToWorkerPromise('shapeToMesh', inputs);
    }

    /**
     * Deletes shape from the cache to keep memory usage low
     * <div>
     *  <img src="../assets/images/blockly-images/occt/deleteShape.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt.OCCT.html#deleteShape
     * @param inputs shape
     * @group memory management
     * @shortname delete shape
     */
    async deleteShape(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSShapePointer>): Promise<void> {
        return await this.occWorkerManager.genericCallToWorkerPromise('deleteShape', inputs);
    }

    /**
     * Deletes shapes from the cache to keep memory usage low
     * <div>
     *  <img src="../assets/images/blockly-images/occt/deleteShapes.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt.OCCT.html#deleteShapes
     * @param inputs shape
     * @group memory management
     * @shortname delete shapes
     */
    async deleteShapes(inputs: Inputs.OCCT.ShapesDto<Inputs.OCCT.TopoDSShapePointer>): Promise<void> {
        return await this.occWorkerManager.genericCallToWorkerPromise('deleteShapes', inputs);
    }
}

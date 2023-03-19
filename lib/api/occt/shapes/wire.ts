import * as Inputs from 'bitbybit-occt/lib/api/inputs/inputs';
import { OCCTWorkerManager } from '../../../occ-worker/occ-worker-manager';

export class OCCTWire {

    constructor(
        private readonly occWorkerManager: OCCTWorkerManager,
    ) {
    }

    /**
     * Creates OpenCascade Polygon wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/createPolygonWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createPolygonWire
     * @param inputs Polygon points
     * @returns OpenCascade polygon wire shape
     * @group via points
     * @shortname polygon
     */
    createPolygonWire(inputs: Inputs.OCCT.PolygonDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createPolygonWire', inputs);
    }

    /**
    * Creates OpenCascade Bezier wire
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/wire/createBezier.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createBezier
    * @param inputs Points through which to make bezier curve
    * @returns OpenCascade Bezier wire
    * @group via points
    * @shortname bezier
    */
    createBezier(inputs: Inputs.OCCT.BezierDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createBezier', inputs);
    }

    /**
     * Creates OpenCascade BSpline wire from points. This method can be used to create nicely shaped (periodic) loops.
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/interpolatePoints.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#interpolatePoints
     * @param inputs Points through which to make the curve, periodic bool and tolerance
     * @returns OpenCascade BSpline wire
     * @group via points
     * @shortname interpolate
     */
    interpolatePoints(inputs: Inputs.OCCT.InterpolationDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.interpolatePoints', inputs);
    }

    /**
     * Creates OpenCascade BSPline wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/createbspline.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createBSpline
     * @param inputs Points through which to make BSpline
     * @returns OpenCascade BSpline wire
     * @group via points
     * @shortname bspline
     */
    createBSpline(inputs: Inputs.OCCT.BSplineDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createBSpline', inputs);
    }

    /**
     * Combines OpenCascade edges and wires into a single wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/combineEdgesAndWiresIntoAWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#combineEdgesAndWiresIntoAWire
     * @param inputs List of shapes of edges and wires
     * @returns OpenCascade wire
     * @group build
     * @shortname combine
     */
    combineEdgesAndWiresIntoAWire(inputs: Inputs.OCCT.ShapesDto<Inputs.OCCT.TopoDSWirePointer | Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.combineEdgesAndWiresIntoAWire', inputs);
    }

    /**
     * Adds OpenCascade edges and wires into another wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/addEdgesAndWiresToWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#addEdgesAndWiresToWire
     * @param inputs List of shapes of edges and wires and a single shape wire to which edges need to be added
     * @returns OpenCascade wire
     * @group build
     * @shortname extend
     */
    addEdgesAndWiresToWire(inputs: Inputs.OCCT.ShapeShapesDto<Inputs.OCCT.TopoDSWirePointer, Inputs.OCCT.TopoDSWirePointer | Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.addEdgesAndWiresToWire', inputs);
    }

    /**
    * Divides OpenCascade wire to points blindly following its parametric space
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/wire/dividewirebyparamstopoints.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#divideWireByParamsToPoints
    * @param inputs Describes into how many points should the wire be divided
    * @returns Points on wire
    * @group extract
    * @shortname points by params
    */
    divideWireByParamsToPoints(inputs: Inputs.OCCT.DivideDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.divideWireByParamsToPoints', inputs);
    }

    /**
    * Divides OpenCascade wire to equal distance points
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/wire/dividewirebyequaldistancetopoints.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#divideWireByEqualDistanceToPoints
    * @param inputs Describes into how many points should the wire be divided
    * @returns Points on wire
    * @group extract
    * @shortname points by distance
    */
    divideWireByEqualDistanceToPoints(inputs: Inputs.OCCT.DivideDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.divideWireByEqualDistanceToPoints', inputs);
    }

    /**
    * Evaluates point on a wire at parameter value between 0 and 1, being start and end points
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/wire/pointonwireatparam.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#pointOnWireAtParam
    * @param inputs Wire shape and parameter
    * @returns Point as array of 3 numbers
    * @group extract
    * @shortname point at param
    */
    pointOnWireAtParam(inputs: Inputs.OCCT.DataOnGeometryAtParamDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.pointOnWireAtParam', inputs);
    }

    /**
    * Evaluates point on a wire at certain length
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/wire/pointonwireatlength.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#pointOnWireAtLength
    * @param inputs Wire shape and length value
    * @returns Point as array of 3 numbers
    * @group extract
    * @shortname point at length
    */
    pointOnWireAtLength(inputs: Inputs.OCCT.DataOnGeometryAtLengthDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.pointOnWireAtLength', inputs);
    }

    /**
    * Evaluates tangent vector on a wire at parameter value between 0 and 1, being start and end points
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/wire/tangentOnWireAtParam.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#tangentOnWireAtParam
    * @param inputs Wire shape and parameter
    * @returns Tangent vector as array of 3 numbers
    * @group extract
    * @shortname tangent at param
    */
    tangentOnWireAtParam(inputs: Inputs.OCCT.DataOnGeometryAtParamDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Vector3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.tangentOnWireAtParam', inputs);
    }

    /**
    * Evaluates tangent vector on a wire at certain length
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/wire/pointonwireatlength.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#pointOnWireAtLength
    * @param inputs Wire shape and length value
    * @returns Tangent vector as array of 3 numbers
    * @group extract
    * @shortname tangent at length
    */
    tangentOnWireAtLength(inputs: Inputs.OCCT.DataOnGeometryAtLengthDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Vector3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.tangentOnWireAtLength', inputs);
    }

    /**
    * Computes 3 derivative vectors of a curve at a given length
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/wire/derivativesonwireatlength.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#derivativesOnWireAtLength
    * @param inputs Wire shape and length value
    * @returns Three arrays of vectors. Each vector represents derivatives in order - first, second, third
    * @group extract
    * @shortname derivatives at length
    */
    derivativesOnWireAtLength(inputs: Inputs.OCCT.DataOnGeometryAtLengthDto<Inputs.OCCT.TopoDSWirePointer>): Promise<[Inputs.Base.Vector3, Inputs.Base.Vector3, Inputs.Base.Vector3]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.derivativesOnWireAtLength', inputs);
    }

    /**
    * Computes 3 derivative vectors of a curve on parameter between 0 and 1.
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/wire/derivativesonwireatparam.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#derivativesOnWireAtParam
    * @param inputs Wire shape and parameter value
    * @returns Three arrays of vectors. Each vector represents derivatives in order - first, second, third
    * @group extract
    * @shortname derivatives at param
    */
    derivativesOnWireAtParam(inputs: Inputs.OCCT.DataOnGeometryAtParamDto<Inputs.OCCT.TopoDSWirePointer>): Promise<[Inputs.Base.Vector3, Inputs.Base.Vector3, Inputs.Base.Vector3]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.derivativesOnWireAtParam', inputs);
    }

    /**
    * Computes the star point on the wire at param 0
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/wire/startpointonwire.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#startPointOnWire
    * @param inputs Wire shape
    * @returns The length of the wire
    * @group extract
    * @shortname start point
    */
    startPointOnWire(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.startPointOnWire', inputs);
    }

    /**
    * Computes the end point on the wire at param 1
    * <div>
    *  <img src="../assets/images/blockly-images/occt/shapes/wire/endpointonwire.svg" alt="Blockly Image"/>
    * </div>
    * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#endPointOnWire
    * @param inputs Wire shape
    * @returns The length of the wire
    * @group extract
    * @shortname end point
    */
    endPointOnWire(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.endPointOnWire', inputs);
    }

    /**
     * Creates OpenCascade circle wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/createCircleWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createCircleWire
     * @param inputs Circle parameters
     * @returns OpenCascade circle wire
     * @group primitives
     * @shortname circle
     */
    createCircleWire(inputs: Inputs.OCCT.CircleDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createCircleWire', inputs);
    }

    /**
     * Creates OpenCascade square wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/createSquareWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createSquareWire
     * @param inputs Square parameters
     * @returns OpenCascade square wire
     * @group primitives
     * @shortname square
     */
    createSquareWire(inputs: Inputs.OCCT.SquareDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createSquareWire', inputs);
    }

    /**
     * Creates OpenCascade star wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/createStarWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createStarWire
     * @param inputs star parameters
     * @returns OpenCascade star wire
     * @group primitives
     * @shortname star
     */
    createStarWire(inputs: Inputs.OCCT.StarDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createStarWire', inputs);
    }

    /**
     * Creates OpenCascade n-gon wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/createNGonWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createNGonWire
     * @param inputs ngon parameters
     * @returns OpenCascade ngon wire
     * @group primitives
     * @shortname n-gon
     */
    createNGonWire(inputs: Inputs.OCCT.NGonWireDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createNGonWire', inputs);
    }

    /**
     * Creates n  parallelogram wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/createParallelogramWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createParallelogramWire
     * @param inputs parallelogram parameters
     * @returns OpenCascade star wire
     * @group primitives
     * @shortname parallelogram
     */
    createParallelogramWire(inputs: Inputs.OCCT.ParallelogramDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createParallelogramWire', inputs);
    }

    /**
     * Creates OpenCascade rectangle wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/createRectangleWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createRectangleWire
     * @param inputs rectangle parameters
     * @returns OpenCascade rectangle
     * @group primitives
     * @shortname rectangle
     */
    createRectangleWire(inputs: Inputs.OCCT.RectangleDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createRectangleWire', inputs);
    }

    /**
     * Creates OpenCascade ellipse wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/createEllipseWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#createEllipseWire
     * @param inputs Ellipse parameters
     * @returns OpenCascade ellipse wire
     * @group primitives
     * @shortname ellipse
     */
    createEllipseWire(inputs: Inputs.OCCT.EllipseDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createEllipseWire', inputs);
    }

    /**
     * Gets the wire by providing an index from the shape
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/getWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#getWire
     * @param inputs Shape
     * @returns OpenCascade wire
     * @group get
     * @shortname wire
     */
    getWire(inputs: Inputs.OCCT.ShapeIndexDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.getWire', inputs);
    }

    /**
     * Gets the wires by providing an index from the shape
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/getWires.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#getWires
     * @param inputs Shape
     * @returns OpenCascade wires
     * @group get
     * @shortname wires
     */
    getWires(inputs: Inputs.OCCT.ShapeIndexDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.getWires', inputs);
    }

    /**
     * Computes reversed wire from input wire
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/reversedWire.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#reversedWire
     * @param inputs Shape
     * @returns OpenCascade wire
     * @group get
     * @shortname reversed
     */
    reversedWire(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.reversedWire', inputs);
    }

    /**
     * Gets the wire length
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/getWireLength.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#getWireLength
     * @param inputs wire
     * @returns Length
     * @group get
     * @shortname length
     */
    getWireLength(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSWirePointer>): Promise<number> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.getWireLength', inputs);
    }

    /**
     * Gets the lengths of wires
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/getWiresLengths.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#getWiresLengths
     * @param inputs wires
     * @returns Lengths
     * @group get
     * @shortname lengths
     */
    getWiresLengths(inputs: Inputs.OCCT.ShapesDto<Inputs.OCCT.TopoDSWirePointer>): Promise<number[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.getWiresLengths', inputs);
    }

    /**
     * Places a wire on the face by mapping it's 2d coordinates to UV space. Wire must be positioned on the ground XZ plane for this to work.
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/placeWireOnFace.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#placeWireOnFace
     * @param inputs two shapes - first a wire and second a face
     * @returns OpenCascade wire
     * @group place
     * @shortname wire on face
     */
    placeWireOnFace(inputs: Inputs.OCCT.WireOnFaceDto<Inputs.OCCT.TopoDSWirePointer, Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        inputs.shapes = [inputs.wire, inputs.face];
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.placeWireOnFace', inputs);
    }

    /**
     * Places multiple wires on the face by mapping it's 2d coordinates to UV space. Wires must be positioned on the ground XZ plane for this to work.
     * <div>
     *  <img src="../assets/images/blockly-images/occt/shapes/wire/placeWiresOnFace.svg" alt="Blockly Image"/>
     * </div>
     * @link https://docs.bitbybit.dev/classes/bitbybit_occt_shapes_wire.OCCTWire.html#placeWiresOnFace
     * @param inputs a face and a list of wires
     * @returns OpenCascade wires
     * @group place
     * @shortname wires on face
     */
    placeWiresOnFace(inputs: Inputs.OCCT.ShapeShapesDto<Inputs.OCCT.TopoDSFacePointer, Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.OCCT.TopoDSWirePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.placeWiresOnFace', inputs);
    }

}

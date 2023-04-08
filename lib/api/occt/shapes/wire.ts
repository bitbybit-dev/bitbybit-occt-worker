import * as Inputs from 'bitbybit-occt/lib/api/inputs/inputs';
import { OCCTWorkerManager } from '../../../occ-worker/occ-worker-manager';

export class OCCTWire {

    constructor(
        private readonly occWorkerManager: OCCTWorkerManager,
    ) {
    }

    /**
     * Creates OpenCascade Polygon wire
     * @param inputs Polygon points
     * @returns OpenCascade polygon wire shape
     * @group via points
     * @shortname polygon
     * @drawable true
     */
    createPolygonWire(inputs: Inputs.OCCT.PolygonDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createPolygonWire', inputs);
    }
    /**
     * Creates OpenCascade polyline wire
     * @param inputs polyline points
     * @returns OpenCascade polyline wire shape
     * @group via points
     * @shortname polyline
     * @drawable true
     */
    createPolylineWire(inputs: Inputs.OCCT.PolylineDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createPolylineWire', inputs);
    }
    /**
    * Creates OpenCascade Bezier wire
    * @param inputs Points through which to make bezier curve
    * @returns OpenCascade Bezier wire
    * @group via points
    * @shortname bezier
    * @drawable true
    */
    createBezier(inputs: Inputs.OCCT.BezierDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createBezier', inputs);
    }

    /**
     * Creates OpenCascade BSpline wire from points. This method can be used to create nicely shaped (periodic) loops.
     * @param inputs Points through which to make the curve, periodic bool and tolerance
     * @returns OpenCascade BSpline wire
     * @group via points
     * @shortname interpolate
     * @drawable true
     */
    interpolatePoints(inputs: Inputs.OCCT.InterpolationDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.interpolatePoints', inputs);
    }

    /**
     * Creates OpenCascade BSPline wire
     * @param inputs Points through which to make BSpline
     * @returns OpenCascade BSpline wire
     * @group via points
     * @shortname bspline
     * @drawable true
     */
    createBSpline(inputs: Inputs.OCCT.BSplineDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createBSpline', inputs);
    }

    /**
     * Combines OpenCascade edges and wires into a single wire
     * @param inputs List of shapes of edges and wires
     * @returns OpenCascade wire
     * @group build
     * @shortname combine
     * @drawable true
     */
    combineEdgesAndWiresIntoAWire(inputs: Inputs.OCCT.ShapesDto<Inputs.OCCT.TopoDSWirePointer | Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.combineEdgesAndWiresIntoAWire', inputs);
    }

    /**
     * Adds OpenCascade edges and wires into another wire
     * @param inputs List of shapes of edges and wires and a single shape wire to which edges need to be added
     * @returns OpenCascade wire
     * @group build
     * @shortname extend
     * @drawable true
     */
    addEdgesAndWiresToWire(inputs: Inputs.OCCT.ShapeShapesDto<Inputs.OCCT.TopoDSWirePointer, Inputs.OCCT.TopoDSWirePointer | Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.addEdgesAndWiresToWire', inputs);
    }

    /**
    * Divides OpenCascade wire to points blindly following its parametric space
    * @param inputs Describes into how many points should the wire be divided
    * @returns Points on wire
    * @group extract
    * @shortname points by params
    * @drawable true
    */
    divideWireByParamsToPoints(inputs: Inputs.OCCT.DivideDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.divideWireByParamsToPoints', inputs);
    }

    /**
    * Divides OpenCascade wire to equal distance points
    * @param inputs Describes into how many points should the wire be divided
    * @returns Points on wire
    * @group extract
    * @shortname points by distance
    * @drawable true
    */
    divideWireByEqualDistanceToPoints(inputs: Inputs.OCCT.DivideDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.divideWireByEqualDistanceToPoints', inputs);
    }

    /**
    * Evaluates point on a wire at parameter value between 0 and 1, being start and end points
    * @param inputs Wire shape and parameter
    * @returns Point as array of 3 numbers
    * @group extract
    * @shortname point at param
    * @drawable true
    */
    pointOnWireAtParam(inputs: Inputs.OCCT.DataOnGeometryAtParamDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.pointOnWireAtParam', inputs);
    }

    /**
    * Evaluates point on a wire at certain length
    * @param inputs Wire shape and length value
    * @returns Point as array of 3 numbers
    * @group extract
    * @shortname point at length
    * @drawable true
    */
    pointOnWireAtLength(inputs: Inputs.OCCT.DataOnGeometryAtLengthDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.pointOnWireAtLength', inputs);
    }

    /**
    * Evaluates tangent vector on a wire at parameter value between 0 and 1, being start and end points
    * @param inputs Wire shape and parameter
    * @returns Tangent vector as array of 3 numbers
    * @group extract
    * @shortname tangent at param
    * @drawable true
    */
    tangentOnWireAtParam(inputs: Inputs.OCCT.DataOnGeometryAtParamDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Vector3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.tangentOnWireAtParam', inputs);
    }

    /**
    * Evaluates tangent vector on a wire at certain length
    * @param inputs Wire shape and length value
    * @returns Tangent vector as array of 3 numbers
    * @group extract
    * @shortname tangent at length
    * @drawable true
    */
    tangentOnWireAtLength(inputs: Inputs.OCCT.DataOnGeometryAtLengthDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Vector3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.tangentOnWireAtLength', inputs);
    }

    /**
    * Computes 3 derivative vectors of a curve at a given length
    * @param inputs Wire shape and length value
    * @returns Three arrays of vectors. Each vector represents derivatives in order - first, second, third
    * @group extract
    * @shortname derivatives at length
    * @drawable false
    */
    derivativesOnWireAtLength(inputs: Inputs.OCCT.DataOnGeometryAtLengthDto<Inputs.OCCT.TopoDSWirePointer>): Promise<[Inputs.Base.Vector3, Inputs.Base.Vector3, Inputs.Base.Vector3]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.derivativesOnWireAtLength', inputs);
    }

    /**
    * Computes 3 derivative vectors of a curve on parameter between 0 and 1.
    * @param inputs Wire shape and parameter value
    * @returns Three arrays of vectors. Each vector represents derivatives in order - first, second, third
    * @group extract
    * @shortname derivatives at param
    * @drawable false
    */
    derivativesOnWireAtParam(inputs: Inputs.OCCT.DataOnGeometryAtParamDto<Inputs.OCCT.TopoDSWirePointer>): Promise<[Inputs.Base.Vector3, Inputs.Base.Vector3, Inputs.Base.Vector3]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.derivativesOnWireAtParam', inputs);
    }

    /**
    * Computes the star point on the wire at param 0
    * @param inputs Wire shape
    * @returns The length of the wire
    * @group extract
    * @shortname start point
    * @drawable true
    */
    startPointOnWire(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.startPointOnWire', inputs);
    }

    /**
    * Computes the end point on the wire at param 1
    * @param inputs Wire shape
    * @returns The length of the wire
    * @group extract
    * @shortname end point
    * @drawable true
    */
    endPointOnWire(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.endPointOnWire', inputs);
    }

    /**
     * Creates OpenCascade circle wire
     * @param inputs Circle parameters
     * @returns OpenCascade circle wire
     * @group primitives
     * @shortname circle
     * @drawable true
     */
    createCircleWire(inputs: Inputs.OCCT.CircleDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createCircleWire', inputs);
    }

    /**
     * Creates OpenCascade square wire
     * @param inputs Square parameters
     * @returns OpenCascade square wire
     * @group primitives
     * @shortname square
     * @drawable true
     */
    createSquareWire(inputs: Inputs.OCCT.SquareDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createSquareWire', inputs);
    }

    /**
     * Creates OpenCascade star wire
     * @param inputs star parameters
     * @returns OpenCascade star wire
     * @group primitives
     * @shortname star
     * @drawable true
     */
    createStarWire(inputs: Inputs.OCCT.StarDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createStarWire', inputs);
    }

    /**
     * Creates OpenCascade n-gon wire
     * @param inputs ngon parameters
     * @returns OpenCascade ngon wire
     * @group primitives
     * @shortname n-gon
     * @drawable true
     */
    createNGonWire(inputs: Inputs.OCCT.NGonWireDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createNGonWire', inputs);
    }

    /**
     * Creates n  parallelogram wire
     * @param inputs parallelogram parameters
     * @returns OpenCascade star wire
     * @group primitives
     * @shortname parallelogram
     * @drawable true
     */
    createParallelogramWire(inputs: Inputs.OCCT.ParallelogramDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createParallelogramWire', inputs);
    }

    /**
     * Creates OpenCascade rectangle wire
     * @param inputs rectangle parameters
     * @returns OpenCascade rectangle
     * @group primitives
     * @shortname rectangle
     * @drawable true
     */
    createRectangleWire(inputs: Inputs.OCCT.RectangleDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createRectangleWire', inputs);
    }

    /**
     * Creates OpenCascade ellipse wire
     * @param inputs Ellipse parameters
     * @returns OpenCascade ellipse wire
     * @group primitives
     * @shortname ellipse
     * @drawable true
     */
    createEllipseWire(inputs: Inputs.OCCT.EllipseDto): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.createEllipseWire', inputs);
    }

    /**
     * Gets the wire by providing an index from the shape
     * @param inputs Shape
     * @returns OpenCascade wire
     * @group get
     * @shortname wire
     * @drawable true
     */
    getWire(inputs: Inputs.OCCT.ShapeIndexDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.getWire', inputs);
    }

    /**
     * Gets the wires by providing an index from the shape
     * @param inputs Shape
     * @returns OpenCascade wires
     * @group get
     * @shortname wires
     * @drawable true
     */
    getWires(inputs: Inputs.OCCT.ShapeIndexDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.getWires', inputs);
    }

    /**
     * Computes reversed wire from input wire
     * @param inputs Shape
     * @returns OpenCascade wire
     * @group get
     * @shortname reversed
     * @drawable true
     */
    reversedWire(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.reversedWire', inputs);
    }

    /**
     * Gets the wire length
     * @param inputs wire
     * @returns Length
     * @group get
     * @shortname length
     * @drawable false
     */
    getWireLength(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSWirePointer>): Promise<number> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.getWireLength', inputs);
    }

    /**
     * Gets the lengths of wires
     * @param inputs wires
     * @returns Lengths
     * @group get
     * @shortname lengths
     * @drawable false
     */
    getWiresLengths(inputs: Inputs.OCCT.ShapesDto<Inputs.OCCT.TopoDSWirePointer>): Promise<number[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.getWiresLengths', inputs);
    }

    /**
     * Places a wire on the face by mapping it's 2d coordinates to UV space. Wire must be positioned on the ground XZ plane for this to work.
     * @param inputs two shapes - first a wire and second a face
     * @returns OpenCascade wire
     * @group place
     * @shortname wire on face
     * @drawable true
     */
    placeWireOnFace(inputs: Inputs.OCCT.WireOnFaceDto<Inputs.OCCT.TopoDSWirePointer, Inputs.OCCT.TopoDSFacePointer>): Promise<Inputs.OCCT.TopoDSWirePointer> {
        inputs.shapes = [inputs.wire, inputs.face];
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.placeWireOnFace', inputs);
    }

    /**
     * Places multiple wires on the face by mapping it's 2d coordinates to UV space. Wires must be positioned on the ground XZ plane for this to work.
     * @param inputs a face and a list of wires
     * @returns OpenCascade wires
     * @group place
     * @shortname wires on face
     * @drawable true
     */
    placeWiresOnFace(inputs: Inputs.OCCT.ShapeShapesDto<Inputs.OCCT.TopoDSFacePointer, Inputs.OCCT.TopoDSWirePointer>): Promise<Inputs.OCCT.TopoDSWirePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.wire.placeWiresOnFace', inputs);
    }

}

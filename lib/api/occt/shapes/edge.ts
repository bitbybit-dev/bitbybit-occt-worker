
import { Inputs } from 'bitbybit-occt';
import { OCCTWorkerManager } from '../../../occ-worker/occ-worker-manager';

export class OCCTEdge {

    constructor(
        private readonly occWorkerManager: OCCTWorkerManager,
    ) {
    }

    /**
     * Creates linear edge between two points
     * @param inputs Two points between which edge should be created
     * @returns OpenCascade edge
     * @group primitives
     * @shortname line
     * @drawable true
     */
    line(inputs: Inputs.OCCT.LineDto): Promise<Inputs.OCCT.TopoDSEdgePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.line', inputs);
    }

    /**
     * Creates arc edge between three points
     * @param inputs Shape, radius and edge indexes to fillet
     * @returns OpenCascade edge
     * @group primitives
     * @shortname arc 3 points
     * @drawable true
     */
    arcThroughThreePoints(inputs: Inputs.OCCT.ArcEdgeThreePointsDto): Promise<Inputs.OCCT.TopoDSEdgePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.arcThroughThreePoints', inputs);
    }

    /**
     * Creates OpenCascade circle edge
     * @param inputs Circle parameters
     * @returns OpenCascade circle edge
     * @group primitives
     * @shortname circle
     * @drawable true
     */
    createCircleEdge(inputs: Inputs.OCCT.CircleDto): Promise<Inputs.OCCT.TopoDSEdgePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.createCircleEdge', inputs);
    }

    /**
     * Creates OpenCascade ellipse edge
     * @param inputs Ellipse parameters
     * @returns OpenCascade ellipse edge
     * @group primitives
     * @shortname ellipse
     * @drawable true
     */
    createEllipseEdge(inputs: Inputs.OCCT.EllipseDto): Promise<Inputs.OCCT.TopoDSEdgePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.createEllipseEdge', inputs);
    }


    /**
     * Removes internal faces for the shape
     * @param inputs Shape
     * @returns OpenCascade shape with no internal edges
     * @group shapes
     * @shortname remove internal
     * @drawable true
     */
    removeInternalEdges(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSShapePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.removeInternalEdges', inputs);
    }

    /**
     * Gets the edge by providing an index from the shape
     * @param inputs Shape
     * @returns OpenCascade edge
     * @group shapes
     * @shortname get edge
     * @drawable true
     */
    getEdge(inputs: Inputs.OCCT.ShapeIndexDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSEdgePointer> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.getEdge', inputs);
    }

    /**
     * Gets the edges of a shape in a list
     * @param inputs Shape
     * @returns OpenCascade edge list
     * @group shapes
     * @shortname get edges
     * @drawable true
     */
    getEdges(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.OCCT.TopoDSEdgePointer[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.getEdges', inputs);
    }

    /**
     * Creates an edge from geom curve and geom surface
     * @param inputs shapes are expected to contain 2 array elements - first is geom curve, second geom surface
     * @returns OpenCascade TopoDS_Edge
     * @group from
     * @shortname 2d curve and surface
     * @drawable true
     */
    makeEdgeFromGeom2dCurveAndSurface(inputs: Inputs.OCCT.EdgeFromGeom2dCurveAndSurfaceDto<Inputs.OCCT.Geom2dCurvePointer, Inputs.OCCT.GeomSurfacePointer>): Promise<Inputs.OCCT.TopoDSEdgePointer> {
        inputs.shapes = [inputs.curve, inputs.surface];
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.makeEdgeFromGeom2dCurveAndSurface', inputs);
    }

    /**
     * Gets corner points of edges for a shape. There's no order guarantee here. All duplicates are removed, so when three edges form one corner, that will be represented by a single point in the list. 
     * @param inputs Shape that contains edges - wire, face, shell, solid
     * @returns List of points
     * @group get
     * @shortname corners
     * @drawable true
     */
    getCornerPointsOfEdgesForShape(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSShapePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.getCornerPointsOfEdgesForShape', inputs);
    }

    /**
     * Gets the edge length
     * @param inputs edge
     * @returns Length
     * @group get
     * @shortname length
     * @drawable false
     */
    getEdgeLength(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<number> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.getEdgeLength', inputs);
    }

    /**
     * Gets the lengths of the edges
     * @param inputs edges
     * @returns Lengths
     * @group get
     * @shortname lengths
     * @drawable false
     */
    getEdgesLengths(inputs: Inputs.OCCT.ShapesDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<number[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.getEdgesLengths', inputs);
    }

    /**
     * Gets the center of mass for the edge
     * @param inputs edge
     * @returns Point representing center of mass
     * @group get
     * @shortname center of mass
     * @drawable true
     */
    getEdgeCenterOfMass(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.getEdgeCenterOfMass', inputs);
    }

    /**
     * Gets the centers of mass for the edges
     * @param inputs edges
     * @returns Points representing centers of mass
     * @group get
     * @shortname centers of mass
     * @drawable true
     */
    getEdgesCentersOfMass(inputs: Inputs.OCCT.ShapesDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.getEdgesCentersOfMass', inputs);
    }

    /**
     * Gets the point on edge at param
     * @param input edge
     * @returns Point on param
     * @group extract
     * @shortname point at param
     * @drawable true
     */
    pointOnEdgeAtParam(inputs: Inputs.OCCT.DataOnGeometryAtParamDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.pointOnEdgeAtParam', inputs);
    }

    /**
     * Gets the tangent vector on edge at param
     * @param input edge
     * @returns Tangent vector on param
     * @group extract
     * @shortname tangent at param
     * @drawable true
     */
    tangentOnEdgeAtParam(inputs: Inputs.OCCT.DataOnGeometryAtParamDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.tangentOnEdgeAtParam', inputs);
    }

    /**
     * Gets the point on edge at length
     * @param input edge and length
     * @returns Point on edge
     * @group extract
     * @shortname point at length
     * @drawable true
     */
    pointOnEdgeAtLength(inputs: Inputs.OCCT.DataOnGeometryAtLengthDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.pointOnEdgeAtLength', inputs);
    }

    /**
     * Gets the tangent vector on edge at length
     * @param input edge and length
     * @returns Tangent vector on edge
     * @group extract
     * @shortname tangent at length
     * @drawable true
     */
    tangentOnEdgeAtLength(inputs: Inputs.OCCT.DataOnGeometryAtLengthDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.tangentOnEdgeAtLength', inputs);
    }

    /**
     * Gets the start point on edge
     * @param input edge
     * @returns Start point
     * @group extract
     * @shortname start point
     * @drawable true
     */
    startPointOnEdge(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.startPointOnEdge', inputs);
    }

    /**
     * Gets the end point on edge
     * @param input edge
     * @returns End point
     * @group extract
     * @shortname end point
     * @drawable true
     */
    endPointOnEdge(inputs: Inputs.OCCT.ShapeDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.Base.Point3> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.endPointOnEdge', inputs);
    }

    /**
     * Divides edge by params to points
     * @param input edge and division params
     * @returns Points
     * @group extract
     * @shortname points by params
     * @drawable true
     */
    divideEdgeByParamsToPoints(inputs: Inputs.OCCT.DivideDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.divideEdgeByParamsToPoints', inputs);
    }

    /**
     * Divides edge by length to points
     * @param input edge and division params
     * @returns Points
     * @group extract
     * @shortname points by distance
     * @drawable true
     */
    divideEdgeByEqualDistanceToPoints(inputs: Inputs.OCCT.DivideDto<Inputs.OCCT.TopoDSEdgePointer>): Promise<Inputs.Base.Point3[]> {
        return this.occWorkerManager.genericCallToWorkerPromise('shapes.edge.divideEdgeByEqualDistanceToPoints', inputs);
    }
}
